import styled from "styled-components";
import {borderColor} from "polished";
import {color} from "../style/theme";

const IconButtonStyle = styled.button`
  width: ${p => p.width}px;
  aspect-ratio: 1/1;
  
  color: ${p => p.color};
  font-size: ${p => p.size}px;
  border-radius: 100%;

  background-color: ${p => p.background};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  transition: background-color 300ms, transform 300ms;
  
  &:hover {
    background-color: ${p => p.theme.color.Gray2};
    transform: translateY(-3px);
  }
`

export const IconButton = ({children, width, color, background, size, ...rest}) => {
  return (
    <IconButtonStyle width={width} color={color} background={background} size={size} {...rest}>
      {children}
    </IconButtonStyle>
  )
}

IconButton.defaultProps = {
  width: 45,
  color: color.Gray8,
  background: 'transparent',
  size: 22
}