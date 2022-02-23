import React from "react";
import { animated } from "react-spring";
import styled, { keyframes } from "styled-components";
import * as easings from "d3-ease";

import {
  PreviewContainer,
  AnimationContainer,
  GroundContainer,
  AnimationTitle,
} from "./common";

const BounceAnimation = keyframes`
  0% {
    transform: translateY(0em);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translateY(12.8em);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translateY(0em);
    animation-timing-function: ease-in;
  }
`;

const Ball = styled(animated.div)`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: #A52A2A;
  border: 2px solid #252525;

  animation: 2.1s ${BounceAnimation} ease-out infinite;
`;

export function Brown() {
  return (
    <PreviewContainer>
      <AnimationTitle>بني</AnimationTitle>
      <AnimationContainer>
        <Ball />
        <GroundContainer />
      </AnimationContainer>
    </PreviewContainer>
  );
}
export default Brown;