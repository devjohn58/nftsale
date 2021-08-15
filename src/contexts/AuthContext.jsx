import { createContext, useState, useEffect } from "react";
import { smartContract, getBalance } from "../helps/connect";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [account, setAccount] = useState()
    const [balance, setBalance] = useState()
    const [price, setPrice] = useState()
    const [statusBuy, setStatusBuy] = useState()
    const [modalBuy, setModalBuy] = useState(false)
    const [modalOffer, setModalOffer] = useState(false)
    const [finish, setFinish] = useState({status: false, message: false})
    //check account connect to metamask
    useEffect(() => {
        const connect = async () => {
            const provider = await smartContract();
            if(provider){
                const address =await provider.eth.getAccounts();
                if(address.length !== 0){
                    setAccount(address);
                    let balan = await getBalance(provider, address[0]);
                    balan =(parseInt(balan)/10**18).toFixed(5);
                    setBalance(balan)
                }
            }
        }
        connect();
        return connect;
    }, [])
    const data = {
        balance, setBalance,
        price, setPrice,
        account, setAccount,
        modalBuy, setModalBuy,
        modalOffer,setModalOffer,
        statusBuy, setStatusBuy,
        finish, setFinish,
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider