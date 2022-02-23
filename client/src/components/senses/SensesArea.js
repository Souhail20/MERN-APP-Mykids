import React from 'react';
import styled from 'styled-components';
import sensesvd from '../img/sensesvd.mp4'
import cham from "../img/hawasyjpg.jpg"
function SensesArea() {
    return (
        <SensesAreaStyled>
            <video src={sensesvd} muted playsInline autoPlay loop ></video>          
        </SensesAreaStyled>
    )
}

const SensesAreaStyled = styled.header`
    font-family : 'Montserrat',sans-serif;
    width: 100%;
    height: 100vh;
    display:flex;
    
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
       transform:translate(50px,50px)
       padding : 10px 10px
    }
    img{
        
            width: 40%;
            height: 100%;
            object-fit: cover;
            opacity: 1;
           transform:translate(60px,100px)
               
    }
`;

export default SensesArea;
