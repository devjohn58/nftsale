import { useContext } from "react";
import { Typography, Avatar, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { TagFilled, CopyFilled } from "@ant-design/icons";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";

const Div = styled.div`
	padding: 0px 10px;
	a {
		color: rgb(88, 76, 218);
		font-size: 18px;
		font-weight: 500;
	}
	._price {
        background-color: #f4f4fa;
		border-radius: 2px;
		border: 1px solid #eae9f1;
		color: #1e1d29;
		padding: 16px;
		margin-top: 20px;
		p {
            opacity: 0.6;
		}
	}
	._price_text {
        color: #1e1d29;
		font-size: 24px;
		font-weight: 700;
	}
    ._listing{
        margin-top: 20px;
        border: 1px solid #eae9f1;
        ._listing_make_offer_button{
            color: rgb(88, 76, 218);
            padding: 0px 30px; 
            font-weight: 700;
            font-size: 19px;
            height: 50px;
            border: 1px solid rgb(88, 76, 218);
            margin: 10px;
        }
    }
    ._listing_1, ._listing_2, ._listing_3{
        border-bottom: 1px solid #eae9f1;
        padding: 10px;
    }
    ._listing_2{
        background-color: #f4f4fa;
        button{
            color: rgb(88, 76, 218);
            padding: 0px 50px; 
            font-weight: 700;
            font-size: 14px;
            border: 1px solid rgb(88, 76, 218);
        }
    }
`;

const RightProduct = (props) => {
    const {data} = props;
    const {setModalBuy, setModalOffer, setPrice} = useContext(AuthContext);
    const BuyClick = async () => {
        setModalBuy(true)
        setPrice(data.price)
    }
    
    const OfferClick =async amount => {
        setModalOffer(true)
    }
	return (
		<Div>
			<div>
				<Link to="/markets/0x2a62623bbb82ac60795d2015d70cc87861258def">
					Lime Odyssey M
				</Link>
				<p>
					<Typography.Text
						style={{ fontSize: "32px", fontWeight: "bold" }}
					>
						Lime Odyssey M {data.title} INO Package
					</Typography.Text>
				</p>
			</div>
			<div className="_price">
				<p>Current price</p>
				<img width="20" src="https://assets.itam.games/itamtoken.png" />
				<Typography.Text className="_price_text"> {data.price} </Typography.Text>
			</div>
			<div className="_listing">
                <div className="_listing_1">
                    <TagFilled rotate={-90}/>
                    <Typography.Text style={{fontSize: '18px', fontWeight: '700', marginLeft: '5px'}}>Listings</Typography.Text>
                </div>
                <div  className="_listing_1">
                    <Row>
                        <Col span={8}>
                            <Typography.Text style={{fontSize: '18px', opacity: '0.7'}}>From</Typography.Text>
                        </Col>
                        <Col span={8}>
                            <Typography.Text style={{fontSize: '18px', opacity: '0.7'}}>Price</Typography.Text>
                        </Col>
                        <Col span={8}>
                        </Col>
                    </Row>
                </div>
                <div  className="_listing_2">
                    <Row>
                        <Col span={8}>
                            <Avatar src="https://assets.itam.games/profiles/profile_05.png" size="small"></Avatar>
                            <Typography.Text  style={{marginLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '500'}}>ATEAM</Typography.Text>
                        </Col>
                        <Col span={8}>
                            <img width="18" src="https://assets.itam.games/itamtoken.png" />
			            	<Typography.Text  style={{fontSize: '20px'}}> {data.price}</Typography.Text>
                        </Col>
                        <Col span={8}>
                            <Button onClick={BuyClick}>
                                Buy
                            </Button>
                        </Col>
                    </Row>
                </div>
			</div>

			{/* Offer start */}
			<div className="_listing">
                <div className="_listing_1">
                    <Offer/>
                    <Typography.Text style={{fontSize: '18px', fontWeight: '700', marginLeft: '5px'}}>Offers</Typography.Text>
                </div>
                <div  className="_listing_2">
                    <center>
                        <CopyFilled /><br></br>
                        <Typography.Text>No offer yet</Typography.Text>
                    </center>
                </div>
                <div className="_listing_2">
                    <Button className="_listing_make_offer_button" onClick={OfferClick}>
                        Make Offer
                    </Button>
                </div>
			</div>
		</Div>
	);
};



const Offer =  () => {
    return (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M82.42 209.08c15.06-6.62 32.38 1.31 38.5 17.62L156 312h11.27V80c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v151.75l14.78.25V32c0-17.6 13.3-32 29.55-32 16.3 0 29.55 14.4 29.55 32v199.75L315 232V64c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v183.75l14.78.25V128c0-17.6 13.3-32 29.55-32C434.7 96 448 110.4 448 128v216c0 75.8-37.13 168-169 168-40.8 0-79.42-7-100.66-21a121.41 121.41 0 01-33.72-33.31 138 138 0 01-16-31.78L66.16 250.77c-6.11-16.31 1.2-35.06 16.26-41.69z"></path>
        </svg>
        )
}

export default RightProduct;
