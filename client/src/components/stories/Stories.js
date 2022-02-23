import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Stories.css";
import {SlideData} from "./SliderData";
import ImageBlend from "../img/logostory.jpg";
import Navigation from "../Navigation";
import StoriesArea from "./StoriesArea";

const Stories = ({slides}) => {
  return (
    <div>
      <Navigation/>
      <div className="main-page-container">
      <HTMLFlipBook
          width={550}
          height={730}
          minWidth={400}
          maxWidth={400}
          minHeight={400}
          maxHeight={400}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}     
        >
          <img src={ImageBlend} alt="" cla />
          {SlideData.map((slide, i) => (
            <div className="demoPage" key={slide.id}>
              <img src={slide.image} alt="" />
            </div>
          ))}   
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Stories;