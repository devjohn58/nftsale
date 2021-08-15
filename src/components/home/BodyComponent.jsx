import React from "react";
import {Select, Card, Avatar, Typography, Row, Col, Tooltip } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RowStyled = styled(Row)`
	width: 100%;
	height: calc(100vh - 86px);
	overflow: auto;
	._right {
		flex: 0 0 auto;
		height: 100%;
		display: flex;
		background-color: #f4f4fa;
		overflow: auto;
		width: 230px;
	}
	._right_1 {
		padding: 36px 20px;
	}
	._right_1_1 {
		cursor: pointer;
		padding: 10px;
	}
	._right_1_1:hover,
	._right_1_1:visited {
		background-color: #dcdbe4;
	}
    ._left{
        padding-left: 10px;
    }
	._left_1 {
        width: 100%;
		height: 90px;
		display: flex;
        justify-content: space-between;
		align-items: center;
		padding: 20px 8px 20px 20px;
	}
    ._card{
        padding: 20px;
    }
    .ant-card-head-title{
        padding: 0px;
    }
    .ant-card-body{
        padding: 10px;
    }
    ._author, ._text, ._tooltip{
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
    }
    ._author{
        margin-top: 20px;
    }
`;

const BodyComponent = () => {
    const data = [
        {link: '/markets/0x2a62623bbb82ac60795d2015d70cc87861258def/3', image: 'https://assets.itam.games/lime-odyssey/ino-3rd-package.jpeg', itam: 'ITAM', price: 4000, title: 'Lime Odyssey M 3rd INO Package'},
        {link: '/markets/0x2a62623bbb82ac60795d2015d70cc87861258def/2', image: 'https://assets.itam.games/lime-odyssey/ino-2nd-package.jpeg',itam: 'ITAM', price: 7000,  title: 'Lime Odyssey M 2nd INO Package'},
        {link: '/markets/0x2a62623bbb82ac60795d2015d70cc87861258def/1', image: 'https://assets.itam.games/lime-odyssey/ino-1st-package.jpeg',itam: 'ITAM', price: '10000',  title: 'Lime Odyssey M 1st INO Package'}
    ]
    const widthScreen = window.innerWidth;
	return (
		<>
			<RowStyled>
				<Col span  = {0} lg={{span: '6'}} xl={4}>
					<div className="_right">
						<div className="_right_1">
							<div className="_right_1_1">
								<Avatar src="https://assets.itam.games/lime-odyssey/lime-odyssey-m.jpg" />
								<Typography.Text
									style={{
										marginLeft: "20px",
										fontSize: "15px",
									}}
								>
									<Link
										to="/markets/0x2a62623bbb82ac60795d2015d70cc87861258def"
										style={{
											color: "black",
											opacity: "0.9",
										}}
									>
										Lime Odyssey M
									</Link>
								</Typography.Text>
							</div>
						</div>
					</div>
				</Col>
				<Col className="_left" span={24} lg={18} xl={20}>
					<div className="_left_1">
						<div>
                            <Typography.Text style={{ fontSize: "17px" }}>
                                3 results
                            </Typography.Text>
                        </div>
						<div>
							<Select
								labelInValue
                                size="large"
								defaultValue={{ value: "1" }}
							>
								<Select.Option value="1" style = {{padding: '15px 5px',  borderRadius: '3px'}}>Recently Minted</Select.Option>
								<Select.Option value="2" style = {{padding: '15px 5px',  borderRadius: '3px'}}>Recently Listed</Select.Option>
								<Select.Option value="3" style = {{padding: '15px 5px',  borderRadius: '3px'}}>Recently Offer</Select.Option>
								<Select.Option value="4" style = {{padding: '15px 5px',  borderRadius: '3px'}}>Recently Sold</Select.Option>
								<Select.Option value="5" style = {{padding: '15px 5px',  borderRadius: '3px'}}>Lowest Price</Select.Option>
								<Select.Option value="6" style = {{padding: '15px 5px',  borderRadius: '3px'}}>Highest Price</Select.Option>
							</Select>
						</div>
					</div>
                <Col span = {24}>
                    <Row justify={parseInt(widthScreen) < 700 ? "center" :  false}>
                        {
                            data.map(data => (
                                <Col sm={12} md={7} lg={6}>
                                    <Link to={data.link}>
                                        <div className="_card">
                                            <Card title={ <center><img src={data.image} width="100" height="150" /></center>}>
                                                <div className="_card_body">
                                                    <div className="_text">
                                                        <div>
                                                            <Typography.Text type='secondary' style={{ fontWeight: '500', }}>Lime Odyssey M</Typography.Text>
                                                        </div>
                                                        <div>
                                                            <Typography.Text type='secondary' style={{fontWeight: '500'}}>Price</Typography.Text>
                                                        </div>
                                                    </div>
                                                    <div className="_tooltip">
                                                        <div>
                                                            <Tooltip title={data.title}>
                                                                <Typography.Text style={{cursor: 'pointer'}} style={{fontSize: '18px', fontWeight: '400',}}>Lime Odyssey M ...</Typography.Text>
                                                            </Tooltip>
                                                        </div>
                                                        <div>
                                                            <Tooltip title={data.itam}>
                                                               <img width="20"  src = "https://assets.itam.games/itamtoken.png" />
                                                            </Tooltip>
                                                        </div>
                                                        <div>
                                                            <Tooltip title={data.price}>
                                                                <span style={{fontSize: '15px', fontWeight: '500'}}>{data.price}</span>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                    <div className="_author">
                                                        <div>
                                                            <Typography.Text type='secondary' style={{marginLeft: '10px'}}>#...</Typography.Text>
                                                        </div>
                                                        <div>
                                                            <Avatar src="https://assets.itam.games/profiles/profile_05.png" size="small"></Avatar>
                                                            <Typography.Text type='secondary' style={{marginLeft: '10px', fontWeight: '500'}}>ATEAM</Typography.Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </Link>
                            </Col>
                                ))
                }
                    </Row>
                </Col>
                </Col>
			</RowStyled>
		</>
	);
};

export default BodyComponent;
