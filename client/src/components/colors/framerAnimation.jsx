import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  PreviewContainer,
  AnimationContainer,
  GroundContainer,
  AnimationTitle,
} from "./common";

const Ball = styled(motion.div)`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: red;
  border: 2px solid #252525;
`;

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeIn",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1,
    
  },
};

export function FramerAnimation() {
  return (
    <PreviewContainer>
      <AnimationTitle>أحمر</AnimationTitle>
      <AnimationContainer>
        <Ball
          transition={bounceTransition}
          animate={{
            y: ["0em", "12.8em"],
            //backgroundColor: ["#9b59b6", "#f1c40f"],
          }}
        />
        
        <GroundContainer />
      </AnimationContainer>
    </PreviewContainer>
  );
}
export default FramerAnimation;