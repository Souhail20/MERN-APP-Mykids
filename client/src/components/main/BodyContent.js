import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from './Layouts';
import MainTitle from './MainTitle';
import GradientCardSection from './GradientCardSection';
import ContactSection from './ContactSection';
function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'شنيا نجمو نتعلمو مع بعضنا'} subtitle={'شنيا نجمو نتعلمو مع بعضنا'} />
                <GradientCardSection />          
            </InnerLayout>
            <ContactSection />        
            <footer>
                <p>Copyright ©SouhailKhaled. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.div`
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }

    footer{
        font-family: 'Montserrat',sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #020A27;
        padding: 3rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
        }
    }
`

export default BodyContent;
