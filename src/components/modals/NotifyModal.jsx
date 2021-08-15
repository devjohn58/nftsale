import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Modal } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const NotifyModal = () => {
	const { finish, setFinish } = useContext(AuthContext);
	let { status, message } = finish;
    if(message){
        console.log(message);
        if(message[Object.keys(message)[2]] === undefined){
            message = message[Object.keys(message)[0]]; 
        }
        console.log(message);
        return (
            <Modal
			centered
			width={600}
			title={
                <center>
					<strong>
						<h3>
							{message.status ? "Success" : "Error"} Transaction
						</h3>
					</strong>
				</center>
			}
			onCancel={() => setFinish({ status: false, message: false })}
			footer={false}
			visible={status}
            >
			{message.status ? (
				<>
					<center>
						<div>
							Data syncronization at NFT-SALE.WORK can take some
							time depending on the network(main-net) condition
						</div>
						<div
							style={{
                                padding: "40px",
								fontSize: "100px",
								color: "green",
							}}
						>
							<CheckCircleOutlined />
						</div>
						<a
                            target="_blank"
							href={`https://bscscan.com/tx/${message.transactionHash}`}
						>
							<div
								style={{
                                    display: "inline-block",
									padding: "10px",
									color: "green",
									border: "1px solid green",
									cursor: "pointer",
								}}
							>
								View on BscScan
							</div>
						</a>
					</center>
				</>
			) : (
                <center>
					<div style={{ padding: "40px" }}>
						<CloseCircleOutlined
							style={{ color: "#f43e3e", fontSize: "100px" }}
                            />
					</div>
                    {
                        message.transactionHash ? (
                            <a target="_blank" href={`https://bscscan.com/tx/${message.transactionHash}`}>
                                <div
                                    style={{
                                        display: "inline-block",
                                        padding: "10px",
                                        color: "#f43e3e",
                                        border: "1px solid #f43e3e",
                                        cursor: "pointer",
                                    }}
                                    >
                                    View on BscScan
                                </div>
                            </a>
                        ) : ''
                    }
				</center>
			)}
		</Modal>
	);
}else{
    return (<></>)
}
};

export default NotifyModal;
