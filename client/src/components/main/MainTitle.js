import React from 'react'
import styled from 'styled-components';
import SmallHeading from './SmallHeading';
import { Fade } from "react-reveal";
function MainTitle({title, subtitle, para}) {
    return (
        <MainTitleStyled>
            <Fade  left duration={900} >
            <SmallHeading title={subtitle} />
            <h2>{title}</h2>
            <p>{para}</p>
            </Fade>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
        text-align:center;
    h2{
        padding-top: 1rem;
        font-weight: 500;
        
    }

    p{
        padding: 1.2em 0;
        opacity: 0.5;
        
    }
`;

export default MainTitle;
