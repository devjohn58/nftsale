import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComponent from '../components/home/HeaderComponent';
import LeftProduct from '../components/product/LeftProduct';
import RightProduct from '../components/product/RightProduct';
import InfoProduct from '../components/product/InfoProduct'

const RowStyled = styled(Row)`
    justify-content: center;
    margin-top:44px;
`
const Div = styled.div`
    min-width: 1250px;
`
const ProductPage = () => {
    const {id} = useParams();
    let data;
    if(id === "1"){
        data = {
            image: "https://assets.itam.games/lime-odyssey/ino-1st-package.jpeg",
            price: "10000",
            subtitle: "At the INO part1, you can get Soul stones, Pharaoh's Gauntlet and Armor.",
            tokenId: "1982",
            title: "1st"
        }
    } else if(id === "2"){
        data = {
            image: "https://assets.itam.games/lime-odyssey/ino-2nd-package.jpeg",
            price: "7000",
            subtitle: "At the INO part2, you can get Soul stones, Pharaoh's Pants and Boots.",
            tokenId: "3495",
            title: "2nd"
        }
    }else{
        data = {
            image: "https://assets.itam.games/lime-odyssey/ino-3rd-package.jpeg",
            price: "4000",
            subtitle: "At the INO part 3, you can get Soul stones, Pharaoh's Golden Crown.",
            tokenId: "5405",
            title: "3rd"
        }
    }
    return (
        <Div>
        <HeaderComponent />
            <RowStyled>
                <Col>
                    <RowStyled>
                        <Col>
                            <LeftProduct data = {data}/>
                        </Col>
                        <Col>
                            <RightProduct data = {data}/>
                        </Col>
                        <Col span={20}>
                            <InfoProduct data = {data}/>
                        </Col>
                    </RowStyled>
                </Col>
            </RowStyled>
        </Div>
    );
};

export default ProductPage