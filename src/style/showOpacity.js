import {keyframes} from "styled-components";

export const showLeft = keyframes`
  from {
    transform: translateX(-70%) scaleY(0.5);
    opacity: 0;
  }
  to {
    transform: translateX(0) scaleY(1);
    opacity: 1;
  }
`

export const showRight = keyframes`
  from {
    transform: translateX(70%) scaleY(0.5);
    opacity: 0;
  }
  to {
    transform: translateX(0) scaleY(1);
    opacity: 1;
  }
`

export const showOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`
export const downUp = keyframes`
  0%, 100% {
    transform: translate(-50%, 0px);
  }
  50% {
    transform: translate(-50%, 40px);
  }
`