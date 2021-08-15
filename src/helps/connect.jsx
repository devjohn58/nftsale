import Web3 from "web3";
import {ABI, contract} from "../smart";

export const address = "0x1699A84995b22ae3C98e3506B2961A7bc4c4E1e8";

export const smartContract =() => {
    let web3;
    if(window.ethereum){
            web3 = new Web3(window.ethereum)
        }else if(window.web3){
            web3 = new Web3(window.web3.currentProvider)
        }else{
        web3 = false;
    }
    return web3;
}

export const getBalance = async (provider, address) => {
    const itam = new provider.eth.Contract(ABI, contract)
    return await itam.methods.balanceOf(address).call();
}

// export const Transfer =async amount => {
//     const web3 = smartContract();
//     await window.ethereum.enable();
//     const ownerAddress = await web3.eth.getAccounts();
//     const provider = new web3.eth.Contract(ABI, contract)
//     return provider.methods.transfer('0x1699A84995b22ae3C98e3506B2961A7bc4c4E1e8', web3.utils.toWei(amount, 'ether'))
//         .send({from : ownerAddress[0], gas: 76596})
//         .on('receipt', (receipt) => {
//             return <Receipt receipt = {receipt}/>
//         })
//         .on('error', error => {
//             return <Error error  = {error}/>
//         })
// }
