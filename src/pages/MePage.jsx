import { useContext } from 'react';
import {Button} from 'antd';
import styled from 'styled-components';
import HeaderComponent from '../components/home/HeaderComponent';
import metamask from '../assets/metamask.png'
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { smartContract, getBalance } from '../helps/connect';

const Div = styled.div`
    margin-top: 130px;
    ._button{
        margin-top: 20px;
        button{
            border-radius: 5px;
            height: 55px;
            width: 200px;
            font-size: 22px;
            font-weight: 700;
            color: #584cda;
            border-color: #584cda;
        }
    }
    button:hover{
        background: #584cda;
        color: white;
    }
`

const MePage = () => {
    const history = useHistory();
    const {setAccount, setBalance} = useContext(AuthContext)
    const signIn = async () => {
        const connect = await smartContract();
        if(connect){
            await window.ethereum.enable();
            const account = await connect.eth.getAccounts();
            let balan = await getBalance(connect, account[0]);
            balan =(parseInt(balan)/10**18).toFixed(5);
            setAccount(account)
            setBalance(balan)
            window.open('https://nft.farm/accounts/me/collection', '_blank');
            history.push("/markets")
        }else{
            alert("You have not installed Metamask wallet! Please open in Metamask app opera!")
        }
    }
    return (
        <>
            <HeaderComponent />
            <Div>
                <center>
                    <img src={metamask} width="15%"/>
                    <div className="_button">
                        <Button onClick={signIn}>Sign In</Button>
                    </div>
                </center>
            </Div>
        </>
    );
};

export default MePage;
