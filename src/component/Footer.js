import styled from "styled-components";
import {useEffect, useRef} from "react";

const FooterStyle = styled.footer`
  background-color: ${p => p.theme.color.Gray4};
  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;
    
    padding: 12px;
    margin: 0 auto;
  }
`

const Footer = () => {
  const footerElement = useRef()

  useEffect(() => {
    const height = footerElement.current.clientHeight
    document.documentElement.style.setProperty("--footer-height", `${height}px`)
  }, [])

  return (
    <FooterStyle>
      <div ref={footerElement}>
        개발・다자인 : 박희찬(kichan)
        <p>오픈 소스 프로젝트 : <a href="https://github.com/kichan05/kichan.dev" target={"_blank"}>github.com/kichan05/kichan.dev</a></p>
      </div>
    </FooterStyle>
  )
}

export default Footer