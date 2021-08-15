import { useContext, useState } from 'react';
import { Modal, Tooltip, Select, Input, Avatar, Typography, Row, Col } from 'antd';
import { AuthContext } from '../../contexts/AuthContext';
import { address, smartContract } from "../../helps/connect";
import {ABI, contract} from "../../smart"

const Footer = props => {
    const{balance, amount, set}=props;
    const {setModalOffer, setFinish} = useContext(AuthContext)
    const offer =async  () => {
        const web3 = smartContract();
        await window.ethereum.enable();
        const ownerAddress = await web3.eth.getAccounts();
        const provider = new web3.eth.Contract(ABI, contract)
        return provider.methods.transfer(address, web3.utils.toWei(amount, 'ether'))
        .send({from : ownerAddress[0], gas: 76596})
        .on('receipt', (receipt) => {
            setFinish({status: true, message: receipt})
            setModalOffer(false)
            set('')
        })
        .on('error', error => {
            console.log(error);
            setFinish({status: true, message: error})
            setModalOffer(false)
            set('')
        })
    }
    return (
        <center>
            {
                !amount ? (
                    <Tooltip title = "Please fill out all fields">
                        <div style={{
                            cursor:  'pointer',
                            padding: '10px',
                            width: '130px',
                            backgroundColor: '#dedbf8'
                        }}>
                            <strong><h2 style={{color: 'white'}}>Make Offer</h2></strong>
                        </div>
                    </Tooltip>
                ): 
                parseInt(balance) < parseInt(amount) ?(
                    <Tooltip title = "Insufficient balance">
                        <div style={{
                            cursor:  'pointer',
                            padding: '10px',
                            width: '130px',
                            backgroundColor: '#dedbf8'
                        }}>
                            <strong><h2 style={{color: 'white'}}>Make Offer</h2></strong>
                        </div>
                    </Tooltip>
                ):(
                        <div 
                        onClick={offer}
                        style={{
                            cursor:  'pointer',
                            padding: '10px',
                            width: '130px',
                            backgroundColor: '#584cda'
                        }}>
                            <strong><h2 style={{color: 'white'}}>Make Offer</h2></strong>
                        </div>

                )
            }
        </center>
    )
}

const OfferModal = () => {
    const [amount,setAmount] = useState(undefined)
    const {modalOffer, setModalOffer, balance} = useContext(AuthContext);
    const onInput = (e) => {
        setAmount(e.target.value)
    }
    return (
        <>
            <Modal
                centered
                width={600}
                onCancel={() => setModalOffer(false)}
                visible={modalOffer}
                title={(<center><h2>Make an Offer</h2></center>)}
                footer={<Footer amount={amount} balance={balance} set={setAmount} />}
            >
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize:'17px', paddingBottom: '10px'}}>
                    <div>
                        <strong>Price</strong>
                    </div>
                    <div>
                        Balance: {balance}
                    </div>
                </div>
                <Row>
                    <Col span={7}>
                        <Select size="large" defaultValue={Value}  style={{ width: '100%' }}>{Value}</Select>
                    </Col>
                    <Col span = {10}>
                        <Input 
                            value={amount}
                            type="number" style = {{
                                border: '1px solid #dedbf8',
                                height: '100%' ,
                                width: '100%',
                            }}
                        onChange={onInput}
                        />
                        </Col>
                    <Col span={7} style ={{border: '1px solid #584cda', width: '100%', padding: '7px', textAlign: 'center',cursor: 'pointer' }} 
                        onClick={() => setAmount(balance)}
                    >
                        <strong><h3 style={{color: "#584cda"}}>MAX</h3></strong>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

const Value = (
    <div>
        <Avatar size ="small" src="https://assets.itam.games/itamtoken.png"></Avatar>
        <Typography.Text style={{fontSize: '18px', paddingLeft: '6px'}}>ITAM</Typography.Text>
    </div>
)
export default OfferModal;