import React from 'react';
import HeaderComponent from '../components/home/HeaderComponent';
import BodyComponent from '../components/home/BodyComponent';
import styled from 'styled-components';

const DivStyled = styled.div`
    min-width: 1260px;
    display: flex;
    flex-direction: column;
    padding: 4.375rem 0px 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
`

const HomePage = () => {
    return (
        <DivStyled>
            <HeaderComponent/>
            <BodyComponent/>
        </DivStyled>
    );
};

export default HomePage;