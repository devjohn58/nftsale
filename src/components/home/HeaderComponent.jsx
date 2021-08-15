import styled from "styled-components";
import {Avatar, Menu} from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../contexts/AuthContext"
import zeroaddress from '../../assets/zeroaddress.png'

const DivStyled = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	border-bottom: 1px solid rgb(234, 233, 241);
	padding: 0px 1rem;
	width: 100%;
	height: 4.4375rem;
	box-shadow: rgba(36, 31, 89, 0.25) 0px 0px 8px 0px;
	background-color: rgb(255, 255, 255);
	z-index: 100;
    .ant-menu{
        height: 100%;
    }
    .ant-menu-title-content {
        font-size: 1.125rem;
        font-weight: 500;
        font-family: 'Noto Sans KR', sans-serif;
        opacity: 1;
    }
    .ant-menu-horizontal > .ant-menu-item-selected a::before {
        z-index: 10;
        border-bottom: 4px solid #1890ff;
    }
    .ant-menu-horizontal{
        border-bottom: none;
        line-height: 69px;
    }
    `;

const HeaderComponent = () => {
    const {account} = useContext(AuthContext)
	return (
		<DivStyled>
			<a href="/">
				<img
					src="https://nft.farm/logo.png"
					alt="NFT Farm"
					width="120rem"
				/>
			</a>
            <Menu mode="horizontal" >
                    <Menu.Item key="item1">
                        <Link to="/markets">Market</Link>
                    </Menu.Item>
                    <Menu.Item key="item2">
                        <Link to="/ino">INO</Link>
                    </Menu.Item>
                    <Menu.Item key="item3">
                        <a href="https://voting.itam.games/#/" target="_blank"> Vote </a>
                    </Menu.Item>
                    <Menu.Item key="item4">
                        <a href="https://v1.nft.farm/en" target="_blank"> V1 (Old) </a>
                    </Menu.Item>
                    <Menu.Item key="item5">
                        <a href="https://www.notion.so/itamservices/How-to-use-ITAM-NFT-Farm-84de17c9fbb84e51bb4382dea8d93deb" target="_blank"> Help </a>
                    </Menu.Item>
                    <Menu.Item key="item6">
                        <a href="https://itamservices.notion.site/itamservices/ITAM-Middleware-Guide-0904a699cd2d4b17b33ff0b1598e3767" target="_blank"> Developer </a>
                    </Menu.Item>
                    <Menu.Item key="item7">
                            {
                                account? (
                                    <a href="https://nft.farm/accounts/me/collection" target="_blank">
                                        <Avatar src={zeroaddress}></Avatar>
                                    </a>
                                ):(
                                    <Link to="/account/me/collection">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.4em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg> 
                                    </Link>
                                )
                            }
                    </Menu.Item>
            </Menu>
		</DivStyled>
        );
};
export default HeaderComponent;
