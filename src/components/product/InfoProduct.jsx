import { ToolFilled, TagFilled } from "@ant-design/icons";
import { Table, Typography, Avatar, Tooltip } from "antd";
import styled from "styled-components";
import zeroaddress  from '../../assets/zeroaddress.png';

const Div = styled.div`
    margin: 20px 0px;
    table{
        font-size: 17px;
        .ant-table-thead .ant-table-cell{
            font-weight: 400;
            background: none;
            border-top: 1px solid #eae9f1;
        }
    }
`
const InfoProduct = (props) => {
    const da = props.data;
	const columns = [
		{
			title: "Event",
			dataIndex: "Event",
			width: 125,
            render : created => (
                <>
                    {created === "3" ? (
                        <ToolFilled />
                    ) : created === "2" ? <TagFilled rotate={-90}/> : <Tranfer />}
                    <Typography.Text style={{paddingLeft: '10px'}}>{created === "3" ? "Created" : created==="2" ? "List":  "Transfer"}</Typography.Text>
                </>
            )
        },
		{
			title: "Price",
			dataIndex: "Price",
			width: 125,
            render: status => (
                <> 
                {status ? '' : (
                    <>
                        <Avatar src="https://assets.itam.games/itamtoken.png"></Avatar>
                        <Tooltip title="2000">
				            <Typography.Text style={{paddingLeft: '5px'}}>{da.price}</Typography.Text>
                        </Tooltip>
                    </>
                )}
                </>
            )
		},
		{
            title: "From",
			dataIndex: "From",
            width: 150,
            render: status => (
                <> 
                {status === "3" ? (
                    <>
                        <Avatar src={zeroaddress} size="small"></Avatar>
                        <a href='https://nft.farm/accounts/0x0000000000000000000000000000000000000000/' target="_blank">
                        <Typography.Text  style={{marginLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '400'}}>ZeroAddress</Typography.Text>
                    </a>
                    
                    </>
                ) : (
                    <>
                        <Avatar src="https://assets.itam.games/profiles/profile_05.png" size="small"></Avatar>
                        <Typography.Text  style={{marginLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '400'}}>ATEAM</Typography.Text>
                    </>
                )}
                </>
            )
		},
		{
            title: "To",
			dataIndex: "To",
            width: 160,
            render: status => (
                <> 
                {status === "2" ? '' : status === "1" ? (
                    <>
                         <Avatar src={zeroaddress} size="small"></Avatar>
                        <a href='https://nft.farm/accounts/0xeb448071b405EBF3bF50e87Ea645f0b5b7421D31/' target="_blank">
                            <Typography.Text  style={{marginLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '400'}}>LimeExchange</Typography.Text>
                        </a>
                    </>
                ) : (
                    <>
                        <Avatar src="https://assets.itam.games/profiles/profile_05.png" size="small"></Avatar>
                        <Typography.Text  style={{marginLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '400'}}>ATEAM</Typography.Text>
                    </>
                )}
                </>
            )
		},
		{
            title: "Date",
			dataIndex: "Date",
            width: 150,
            render: status => (
                <div style={{color: 'rgb(88,76,218)'}}> 
                <Typography.Text  style={{marginLeft: '10px',fontSize: '18px',cursor: 'pointer',color: 'rgb(88, 76, 218)', fontWeight: '400'}}>{status}</Typography.Text>
                    <Date/>
                </div>
            )
		},
	];

	const data = [
        {
            key:1, 
            Event:'1', 
            Price: true, 
            From: "1", To: "1", Date: "2 minutes ago" 
        },
        {
            key:2, 
            Event: '2',
            Price: false,
            From: "2", To: "2", Date: "2 minutes ago" 
        },
        {
            key:3, 
            Event:'3', 
            Price: true, 
            From: "3", To: "3", Date: "2 minutes ago" 
        },
    ];

	return (
		<Div>
			<Table
                size="middle"
				columns={columns}
				dataSource={data}
				pagination={false}
				scroll={{ y: 200 }}
			/>
		</Div>
	);
};

const Date = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path></svg>
    )
}
const Tranfer = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 12L20 8 15 4 15 6.999 2 6.999 2 8.999 15 8.999zM22 15L9 15 9 12 4 16 9 20 9 17 22 17z"></path></svg>
    )
}
export default InfoProduct;
