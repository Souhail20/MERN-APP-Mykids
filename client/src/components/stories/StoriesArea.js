import React from 'react';
import styled from 'styled-components';
import lettersimg from '../img/logostory.jpg';

function StoriesArea() {
    return (
        <LetterAreaStyled>
            <img src={lettersimg} alt="myimg"></img>
        </LetterAreaStyled>
    )
}
const LetterAreaStyled = styled.header`
    font-family : 'Montserrat',sans-serif;
    width: 100%;
    height: 115vh;
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
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
    }
`;
export default StoriesArea;
