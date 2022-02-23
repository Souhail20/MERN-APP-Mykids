
import React from 'react';
import { SectionStyled } from './Layouts';
import GradientCard from './GradientCard';
import styled from 'styled-components';
import musiclogo from '../img/musiclogo.webp';
import achkal from '../img/achkal.jpg';
import hourouf from '../img/hourouf.webp';
import salat from '../img/salat.jpg';
import stories from '../img/stories.jpg';
import memory from '../img/memory.png'
import colors from '../img/colors.jpg';
import avatar from '../img/avatar.png';
import {Link} from 'react-router-dom';

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>              
                <div className="gradient-cards-con">
                    <Link to ="/Playmusic">
                    <GradientCard image={musiclogo} avatar={avatar} name={'الأغاني'}  title={'نسمعو الاغاني مع بعضنا'}/>
                    </Link>
                    <Link to='/hourouf'>
                    <GradientCard image={achkal} avatar={avatar} name={'الأشكال'}  title={'هيا نتعلم الاشكال'}  />
                    </Link>
                    <Link to='/Stories'>
                    <GradientCard image={stories} avatar={avatar} name={'قصص'}  title={'هيا نستمتع بالقصص'}  />
                    </Link>
                    <Link to='/Colors'>
                    <GradientCard image={colors} avatar={avatar} name={'الألوان'}  title={'هيا نتعلم الحواس'} />
                    </Link>
                    <Link to='/Games'>
                    <GradientCard image={memory} avatar={avatar} name={'لعبة الذكريات'}  title={'هيا نلعب معا'} />
                    </Link>
                    <Link to ='/Senses'>
                    <GradientCard image={salat} avatar={avatar} name={'تعليم الصلاة'}  title={'هيا نتعلم الصلاة'}  /> 
                    </Link>             
                </div>     
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}
const GradientCardsSectionStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
`;

// GradientCardsSection.defaultProps = {
//     linkk :"/Games"
// }

export default GradientCardsSection;