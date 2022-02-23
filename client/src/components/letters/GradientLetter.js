import React from 'react'
import styled from 'styled-components';
import CtaButton from '../main/CtaButton';
function GradientLetter({image,ctaButton,title}) {
    return (
        <GradientLetterStyled>
             <div id="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-content">
                        <div className="duration">
                        <CtaButton name={'هنا'}  />              
                        </div>                  
                        <div className="cta-btn">
                            {ctaButton}
                        </div>                     
                    </div>
                </div>
            </div>
        </GradientLetterStyled>
    )
}

const GradientLetterStyled = styled.div`
    border-radius: 50%;
    #g-card{
        margin: .2rem;
        .inner-content{
            background-color: #091026;
            padding: .6rem;
            border-radius: 20px;
            width : 250px;                    
        }
        .image{
            width: 100%;
            position: relative;
            img:first-child{
                width: 100%;
                object-fit: cover;
                height: 300px;
                border-radius: 10px;
            }
                
                img{
                    width: 45px;
                    object-fit: cover;
                    height: 45px;
                    border-radius: 50%;
                    margin-right: 2rem;
                }
            }
        }
        .card-content{
            padding-top: 0px;
            .duration{
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 1px dashed rgba(255,255,255, 0.2);
                display: flex;
                justify-content: space-between;
                }
            }
            .cta-btn{
                width: 100%;
            }
        }
        
    }
`;
export default GradientLetter;
