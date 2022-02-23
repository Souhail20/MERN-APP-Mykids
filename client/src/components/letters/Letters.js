import React from 'react'
import { SectionStyled } from '../main/Layouts';
import GradientLetter from './GradientLetter';
import styled from 'styled-components';
import musiclogo from '../img/musiclogo.webp';
import achkal from '../img/achkal.jpg';
import hourouf from '../img/hourouf.webp';
import salat from '../img/salat.jpg';
import stories from '../img/stories.jpg';
import colors from '../img/colors.jpg';
import avatar from '../img/avatar.png';
import Navigation from '../Navigation';
import LetterArea from './LetterArea';
function Letters() {
    return (
        <LettersStyled>
            <Navigation/>
            <LetterArea/>
            <SectionStyled>
                <div className="gradient-cards-con">         
                    <GradientLetter image={musiclogo} avatar={avatar} name={'الأغاني'}  title={'نسمعو الاغاني مع بعضنا'}/>
                    <GradientLetter image={achkal} avatar={avatar} name={'الأشكال'}  title={'هيا نتعلم الاشكال'}  />
                    <GradientLetter image={hourouf} avatar={avatar} name={'الحروف'}  title={'هيا نتعلم الحروف'}  />
                    <GradientLetter image={stories} avatar={avatar} name={'قصص'}  title={'هيا نستمتع بالقصص'}  />
                    <GradientLetter image={colors} avatar={avatar} name={'الألوان'}  title={'هيا نتعلم الالوان'} />
                    <GradientLetter image={salat} avatar={avatar} name={'تعليم الصلاة'}  title={'هيا نتعلم الصلاة'}  />
                    <GradientLetter image={musiclogo} avatar={avatar} name={'الأغاني'}  title={'نسمعو الاغاني مع بعضنا'}/>
                    <GradientLetter image={achkal} avatar={avatar} name={'الأشكال'}  title={'هيا نتعلم الاشكال'}  />
                    <GradientLetter image={hourouf} avatar={avatar} name={'الحروف'}  title={'هيا نتعلم الحروف'}  />
                    <GradientLetter image={stories} avatar={avatar} name={'قصص'}  title={'هيا نستمتع بالقصص'}  />
                    <GradientLetter image={colors} avatar={avatar} name={'الألوان'}  title={'هيا نتعلم الالوان'} />
                    <GradientLetter image={salat} avatar={avatar} name={'تعليم الصلاة'}  title={'هيا نتعلم الصلاة'}  /> 
                    <GradientLetter image={musiclogo} avatar={avatar} name={'الأغاني'}  title={'نسمعو الاغاني مع بعضنا'}/>
                    <GradientLetter image={achkal} avatar={avatar} name={'الأشكال'}  title={'هيا نتعلم الاشكال'}  />
                    <GradientLetter image={hourouf} avatar={avatar} name={'الحروف'}  title={'هيا نتعلم الحروف'}  />
                    <GradientLetter image={stories} avatar={avatar} name={'قصص'}  title={'هيا نستمتع بالقصص'}  />
                    <GradientLetter image={colors} avatar={avatar} name={'الألوان'}  title={'هيا نتعلم الالوان'} />
                    <GradientLetter image={salat} avatar={avatar} name={'تعليم الصلاة'}  title={'هيا نتعلم الصلاة'}  />
                    <GradientLetter image={hourouf} avatar={avatar} name={'الحروف'}  title={'هيا نتعلم الحروف'}  />
                    <GradientLetter image={stories} avatar={avatar} name={'قصص'}  title={'هيا نستمتع بالقصص'}  />
                    <GradientLetter image={colors} avatar={avatar} name={'الألوان'}  title={'هيا نتعلم الالوان'} />
                    <GradientLetter image={salat} avatar={avatar} name={'تعليم الصلاة'}  title={'هيا نتعلم الصلاة'}  /> 
                    <GradientLetter image={musiclogo} avatar={avatar} name={'الأغاني'}  title={'نسمعو الاغاني مع بعضنا'}/>
                    <GradientLetter image={achkal} avatar={avatar} name={'الأشكال'}  title={'هيا نتعلم الاشكال'}  />
                    <GradientLetter image={hourouf} avatar={avatar} name={'الحروف'}  title={'هيا نتعلم الحروف'}  />
                    <GradientLetter image={stories} avatar={avatar} name={'قصص'}  title={'هيا نستمتع بالقصص'}  />
                    <GradientLetter image={colors} avatar={avatar} name={'الألوان'}  title={'هيا نتعلم الالوان'} />
                    <GradientLetter image={salat} avatar={avatar} name={'تعليم الصلاة'}  title={'هيا نتعلم الصلاة'}  />                     
                </div>              
            </SectionStyled>
        </LettersStyled>
    )
}

const LettersStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
    }
`;

export default Letters;
