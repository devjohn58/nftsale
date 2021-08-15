import { useState } from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/home/HeaderComponent';
import ino1 from "../assets/ino1.png"
import ino_part3 from "../assets/ino_part3.jpg"
import pastino1 from "../assets/pastino1.png"
import pastino2 from "../assets/pastino2.png"
import { Typography, Row,Col } from 'antd';

const Container = styled.div`
    min-width: 300px;
`
const Div = styled.div`
    padding-bottom: 50px;
    margin-top: 125px;
    width: 100%;
    ._button{
        width: 200px;
        margin: 43px auto;
        flex: 0 0 auto;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 1.5rem;
        height: 2.75rem;
        overflow: hidden;
        background-color: rgb(195, 194, 204);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        ._button1, ._button2{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            padding: 0px 1.31rem;
            color: rgb(255, 255, 255);
            font-weight: 500;
            font-family: "Public Sans", sans-serif;
            cursor: pointer;
        }
    }
    .active{
        background-color: rgb(165, 61, 220);
        border-radius: 1.5rem;
    }
    ._card{
        padding: 20px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        ._card_1:hover{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 7px 12px;
        }
        ._card_1{
            display:flex;
            flex-direction: row;
            width: 60%;
            border: 1px solid #fafafa;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 5px;
            ._card_body{
                text-align: left;
                padding: 30px;
                a{
                    background: #584cda;
                    color: white;
                    padding: 10px;
                    border-radius: 2px;
                }
                ._card_body2{
                    padding: 20px 0px;
                    p{
                        font-size: 17px;
                        font-weight: 400;
                        line-height: 18px;
                    }
                }
            }
        }
    }
    ._info_date{
        margin-top: 30px;
    }
    ._pastHeader{
        width: 80%;
        margin: 40px auto;
        border: 2px solid #aaaaaa;
    }
    ._pastino{
        padding-bottom: 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        ._pastino1{
            cursor: pointer;
            padding: 0px 20px;
        }
        ._pastino2{
            cursor: pointer;
            padding: 0px 20px;
        }
        ._pastino1 img:hover, ._pastino2 img:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            width: 100.5%;
        }
    }
`

const InoPage = () => {
    const [status, setStatus] = useState(true)
    return (
        <Container>
            <HeaderComponent />
            <Div>
                <center>
                    <img src={ino1} width="80%"/>
                </center>
                <div className="_button">
                        <div className={status ? '_button2 active' : '_button2'} onClick={() => setStatus(true)}>Next INO</div>
                        <div className={status ? '_button2' : '_button2 active'} onClick={() => setStatus(false)}>Past INO</div>
                </div>
                
                {status ?
                    (
                        <div className="_card">
                            <Row className="_card_1" justify="center">
                                <Col span={24} md={12} className="_card_image">
                                    <img src={ino_part3} width="100%" height="100%" />
                                </Col>
                                <Col span={24} md={12} className="_card_body">
                                    <h1 style={{fontWeight: '700'}}>Lime Odyssey M INO Part.3</h1>
                                    <div className="_card_body2">
                                        <p>Battle prep, step 3</p>
                                        <br></br>
                                        <p>At this INO part 3, you can get Soul stones and Pharaoh's Golden Crown. Please note that up-to 30 packages can be registered at one playing account.</p>
                                    </div>
                                    <a href="https://nft.farm/ino/lime-odyssey" target="_blank">
                                        Click here
                                    </a>
                                    <div className="_info_date">
                                        <Typography.Text type="secondary" style={{fontSize: '18px'}}> Launch Time (UTC) </Typography.Text>
                                        <br></br>
                                        <Typography.Text style={{fontSize: '18px'}}> AUG 11, 12 ~ AUG 13, 12 </Typography.Text>
                                    </div>
                                    <div className="_info_date">
                                        <Typography.Text type="secondary" style={{fontSize: '18px'}}> Total Sales Quantity </Typography.Text>
                                        <br></br>
                                        <Typography.Text style={{fontSize: '18px'}}> 2,000 NFT </Typography.Text>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ) : 
                    (
                        <>
                            <div className="_pastHeader"></div>
                            <Row className="_pastino">
                                <Col span={24} md={12} className="_pastino1">
                                    <a href="https://nft.farm/ino/lime-odyssey-part2" target="_blank">
                                        <img src={pastino1}  width="100%"/>
                                    </a>
                                </Col>
                                <Col span={24} md={12} className="_pastino2">
                                    <a href="https://nft.farm/ino/lime-odyssey-part1" target="_blank">
                                        <img src={pastino2}  width="100%"/>
                                    </a>
                                </Col>
                            </Row>
                        </>
                    )
                }
            </Div>
        </Container>
    );
};

export default InoPage;