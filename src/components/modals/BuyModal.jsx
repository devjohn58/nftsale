import { Modal, Avatar, Typography, Tooltip, notification} from "antd";
import { useContext } from "react";
import {AuthContext} from '../../contexts/AuthContext'
import { address, smartContract } from "../../helps/connect";
import { ABI, contract } from "../../smart"

const Title = (
    <>
        <center><h2 style={{fontWeight:'bold'}}>Checkout</h2></center>
        <div style={{display: 'flex', justifyContent:'space-between', paddingTop:'30px'}}>
            <div><strong>Item</strong></div>
            <div><strong>Subtotal</strong></div>
        </div>
    </>
)

const Footer = props => {
    const {setModalBuy, setFinish} = useContext(AuthContext)
    const {balance, price} = props;
    const buy =async () => {
        const web3 = smartContract();
        await window.ethereum.enable();
        const ownerAddress = await web3.eth.getAccounts();
        const provider = new web3.eth.Contract(ABI, contract)
        return provider.methods.transfer(address, web3.utils.toWei(price, 'ether'))
        .send({from : ownerAddress[0], gas: 76596})
        .on('receipt', (receipt) => {
            setFinish({status: true, message: receipt})
            setModalBuy(false)
        })
        .on('error', error => {
            console.log(error);
            setFinish({status: true, message: error})
            setModalBuy(false)
        })
    }
return(
    <>
        <div style={{display: 'flex', justifyContent:'space-between', paddingTop:'30px'}}>
            <div><strong>Total</strong></div>
            <div>
                <Avatar src="https://assets.itam.games/itamtoken.png"></Avatar>
                <Typography.Text style={{fontSize: '19px', paddingLeft: '10px'}}><strong>{price}</strong></Typography.Text>
            </div>
        </div>
        <center>
            {
                parseInt(balance) > parseInt(price) ? (
                    <>
                        <Tooltip title = "Insufficient balance">
                            <div style={{
                                cursor:  'pointer',
                                padding: '10px',
                                width: '130px',
                                backgroundColor: '#dedbf8'
                            }}>
                                <strong><h2 style={{color: 'white'}}>Checkout</h2></strong>
                            </div>
                        </Tooltip>
                    </>
                ):(
                <>
                    <div 
                    onClick={buy}
                    style={{
                        cursor:  'pointer',
                        padding: '10px',
                        width: '130px',
                        backgroundColor: ' #584cda',
                    }}>
                        <strong><h2 style={{color: 'white'}}>Checkout</h2></strong>
                    </div>
                </>
                )
            }
        </center>
    </>
    )
}

const BuyModal = () => {
    const {modalBuy, setModalBuy, balance, price} = useContext(AuthContext)
    let image;
    if(price === "4000"){
        image = "3rd";
    }else if( price === "7000"){
        image = "2nd";
    }else{
        image = "1st"
    }
    return (
        <>
            <Modal
                centered
                width={600}
                title={Title}
                onCancel={() => setModalBuy(false)}
                visible={modalBuy}
                footer={<Footer balance = {balance} price={price}/>}
            >
                <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{border: '1px solid rgb(234, 233, 241)', padding: '5px 20px'}}>
                            <img src={`https://assets.itam.games/lime-odyssey/ino-${image}-package.jpeg`} width="30" />
                        </div>
                        <div style={{paddingLeft: '20px'}}>
                            <a style={{color: '#584cda'}}><small>Lime Odyssey M</small></a>
                            <h3> {`Lime Odssey M ${image} INO Package`}</h3>
                        </div>
                    </div>
                    <div>
                        <Avatar src="https://assets.itam.games/itamtoken.png"></Avatar>
                        <Typography.Text style={{fontSize: '19px', paddingLeft: '10px'}}><strong>{price}</strong></Typography.Text>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default BuyModal;