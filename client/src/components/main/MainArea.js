import React from 'react';
import styled from 'styled-components';
import mykids from '../img/mykids.mp4';
import MainContent from './MainContent';
import {InnerLayout} from './Layouts'

function MainArea() {
    return (
        <MainAreaStyled>          
            <video src={mykids} muted playsInline autoPlay loop></video>          
            <InnerLayout>
                <MainContent />
            </InnerLayout>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.header`
    font-family : 'Montserrat',sans-serif;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 27%;
        height: 30%;
        position: absolute;
        right: 30px;
        top: 350px;
        border-radius : 30%
           
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
    }
`;

export default MainArea;
