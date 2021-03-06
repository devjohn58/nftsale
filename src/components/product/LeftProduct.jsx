import { Avatar, Row, Typography } from 'antd';
import styled from 'styled-components';
import { DatabaseFilled } from '@ant-design/icons';

const Div = styled.div`
    border: 1px solid #eae9f1;
    border-radius: 8px;
    `
    const DivInfo = styled.div`
    margin: 15px 0px;
    border: 1px solid #eae9f1;
    ._title{
        padding: 20px 12px 0 12px;
        font-size: 15px;
        font-weight: 700;
    }
    ._body_info{
        background-color: #f4f4fa;
		border: 1px solid #eae9f1;
		color: #1e1d29;
		padding: 16px;
		margin-top: 20px;
    }
`
const LeftProduct = (props) => {
    const {data} = props
    const widthScreen = window.innerWidth;
    return (
        <>
            <Div>
                <center>
                    <img src={data.image} width='200' height='100%' />
                </center>
            </Div>
            {
                parseInt(widthScreen) > 992 ? (

                    <DivInfo>
                <div className="_title">
                    <IconInfo />
                    <Typography.Text style={{paddingLeft: '5px'}}>About Lime Odyssey M {data.title} INO Package</Typography.Text>
                </div>
                <div className="_body_info">
                    <div>
                        <Avatar src="https://assets.itam.games/profiles/profile_05.png" size="small"></Avatar>
                        <Typography.Text style={{opacity: '0.5', fontSize: '17px', fontWeight: '400', paddingLeft: '10px'}}>Created by</Typography.Text>
                        <Typography.Text  style={{paddingLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '500'}}>ATEAM</Typography.Text>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <Avatar src="https://assets.itam.games/profiles/profile_05.png" size="small"></Avatar>
                        <Typography.Text style={{opacity: '0.5', fontSize: '17px', fontWeight: '400', paddingLeft: '10px'}}>Owned by</Typography.Text>
                        <Typography.Text  style={{paddingLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '500'}}>ATEAM</Typography.Text>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <Typography.Text style={{fontSize: '16px'}}>
                            {data.subtitle}
                        </Typography.Text>
                    </div>
                </div>
                <div className="_title">
                    <DatabaseFilled />
                    <Typography.Text style={{paddingLeft: '5px'}}>Chain Info</Typography.Text>
                </div>
                <div className="_body_info">
                    <Row justify="space-between">
                        <div>
                            Contract Address
                        </div>
                        <div>
                            <a href="https://bscscan.com/token/0x2a62623bbb82ac60795d2015d70cc87861258def" target="_blank">0x2a6262...1258def</a>
                        </div>
                    </Row>
                    <Row justify="space-between" style={{marginTop: '10px'}}>
                        <div>
                            Token ID
                        </div>
                        <div>
                            {data.tokenId}
                        </div>
                    </Row>
                </div>
            </DivInfo>
        ) : ''
    }
        </>
    );
};

const IconInfo = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 -3 24 24" height="1em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></svg>
    )
}
export default LeftProduct;