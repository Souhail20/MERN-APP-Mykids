import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Stories.css";
import {SliderTwo} from "./SliderData";
import story2 from "../img/story2.jfif";
const Stories = ({slides}) => {
  return (
    <div>
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
          <img src={story2} alt="" cla />
          {SliderTwo.map((slide, i) => (
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