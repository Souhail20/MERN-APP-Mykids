import React from 'react'
import styled from 'styled-components';
import Navigation from '../Navigation';
import SmallHeading from './SmallHeading';
import CtaButton from './CtaButton'
import {Link} from 'react-router-dom';

function MainContent() {
    return (
        <MainContentStyled >
            <Navigation/>
            <div className="content">
                <div className="left">                    
                    <SmallHeading title={'Welcome To 9arriny Tn'} identifier={'Before'} />
                    <div className="btns-con">
                    <Link to ='/Register'>
                    <CtaButton name="Register Now"/> 
                    </Link>
                    </div>

                </div>                       
            </div>
        </MainContentStyled >
    )
}
const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 83%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.9rem ;
                
            }
            .btns-con{
                margin-top: 0rem;
                margin-left : 150px;
                width : 100%
                
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 30%;
                border-radius : 50%
            }
        }
    }
`;
export default MainContent;