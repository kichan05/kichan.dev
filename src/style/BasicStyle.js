import {css} from "styled-components";

export const PageBasicStyle = css`
  & > .content {
    width: 100%;
    max-width: ${({theme}) => theme.size.mobileMaxWidth}px;

    margin: 0 auto;
  }
`