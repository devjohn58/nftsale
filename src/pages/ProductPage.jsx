import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderComponent from "../components/home/HeaderComponent";
import LeftProduct from "../components/product/LeftProduct";
import RightProduct from "../components/product/RightProduct";
import InfoProduct from "../components/product/InfoProduct";
import { Avatar, Typography } from "antd";
import { DatabaseFilled } from "@ant-design/icons";

const RowStyled = styled(Row)`
	margin-top: 44px;
	padding: 10px;
`;
const Div = styled.div`
	min-width: 430px;
`;
const DivInfo = styled.div`
	margin: 15px 0px;
	border: 1px solid #eae9f1;
	._title {
		padding: 20px 12px 0 12px;
		font-size: 15px;
		font-weight: 700;
	}
	._body_info {
		background-color: #f4f4fa;
		border: 1px solid #eae9f1;
		color: #1e1d29;
		padding: 16px;
		margin-top: 20px;
	}
`;

const ProductPage = () => {
	const { id } = useParams();
	let data;
	if (id === "1") {
		data = {
			image: "https://assets.itam.games/lime-odyssey/ino-1st-package.jpeg",
			price: "9000",
			subtitle:
				"At the INO part1, you can get Soul stones, Pharaoh's Gauntlet and Armor.",
			tokenId: "1982",
			title: "1st",
		};
	} else if (id === "2") {
		data = {
			image: "https://assets.itam.games/lime-odyssey/ino-2nd-package.jpeg",
			price: "6000",
			subtitle:
				"At the INO part2, you can get Soul stones, Pharaoh's Pants and Boots.",
			tokenId: "3495",
			title: "2nd",
		};
	} else {
		data = {
			image: "https://assets.itam.games/lime-odyssey/ino-3rd-package.jpeg",
			price: "4000",
			subtitle:
				"At the INO part 3, you can get Soul stones, Pharaoh's Golden Crown.",
			tokenId: "5405",
			title: "3rd",
		};
	}
	const widthScreen = window.innerWidth;
	return (
		<Div>
			<HeaderComponent />
			<RowStyled>
				<Col>
					<RowStyled justify="center">
						<Col span={24} lg={12}>
							<LeftProduct data={data} />
						</Col>
						<Col span={24} lg={12}>
							<RightProduct data={data} />
						</Col>
						{parseInt(widthScreen) <=
							992 ? (
								<Col span={24} lg={12}>
									<Test data={data} />
								</Col>
							) : ""}
						<Col span={20}>
							<InfoProduct data={data} />
						</Col>
					</RowStyled>
				</Col>
			</RowStyled>
		</Div>
	);
};

const Test = (props) => {
	const { data } = props;
	return (
		<>
			<DivInfo>
				<div className="_title">
					<IconInfo />
					<Typography.Text style={{ paddingLeft: "5px" }}>
						About Lime Odyssey M {data.title} INO Package
					</Typography.Text>
				</div>
				<div className="_body_info">
					<div>
						<Avatar
							src="https://assets.itam.games/profiles/profile_05.png"
							size="small"
						></Avatar>
						<Typography.Text
							style={{
								opacity: "0.5",
								fontSize: "17px",
								fontWeight: "400",
								paddingLeft: "10px",
							}}
						>
							Created by
						</Typography.Text>
						<Typography.Text
							style={{
								paddingLeft: "10px",
								fontSize: "18px",
								cursor: "pointer",
								color: "rgb(88, 76, 218)",
								fontWeight: "500",
							}}
						>
							ATEAM
						</Typography.Text>
					</div>
					<div style={{ marginTop: "8px" }}>
						<Avatar
							src="https://assets.itam.games/profiles/profile_05.png"
							size="small"
						></Avatar>
						<Typography.Text
							style={{
								opacity: "0.5",
								fontSize: "17px",
								fontWeight: "400",
								paddingLeft: "10px",
							}}
						>
							Owned by
						</Typography.Text>
						<Typography.Text
							style={{
								paddingLeft: "10px",
								fontSize: "18px",
								cursor: "pointer",
								color: "rgb(88, 76, 218)",
								fontWeight: "500",
							}}
						>
							ATEAM
						</Typography.Text>
					</div>
					<div style={{ marginTop: "10px" }}>
						<Typography.Text style={{ fontSize: "16px" }}>
							{data.subtitle}
						</Typography.Text>
					</div>
				</div>
				<div className="_title">
					<DatabaseFilled />
					<Typography.Text style={{ paddingLeft: "5px" }}>
						Chain Info
					</Typography.Text>
				</div>
				<div className="_body_info">
					<Row justify="space-between">
						<div>Contract Address</div>
						<div>
							<a
								href="https://bscscan.com/token/0x2a62623bbb82ac60795d2015d70cc87861258def"
								target="_blank"
							>
								0x2a6262...1258def
							</a>
						</div>
					</Row>
					<Row justify="space-between" style={{ marginTop: "10px" }}>
						<div>Token ID</div>
						<div>{data.tokenId}</div>
					</Row>
				</div>
			</DivInfo>
		</>
	);
};

const IconInfo = () => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			stroke-width="0"
			viewBox="0 -3 24 24"
			height="1em"
			width="2em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
		</svg>
	);
};
export default ProductPage;
