import styled from "styled-components";
import {useEffect, useRef} from "react";

const HeaderStyle = styled.header`
  width: 100%;
  
  background-color: ${p => p.theme.color.Gray1};
  
  position: sticky;
  top: 0;
  z-index: 999;
  
  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;

    padding: 20px 16px;
    margin: 0 auto;
  }
  
  // h1 {
  //   color: ${p => p.theme.color.Indigo9};
  //   font-size: 28px;
  //  
  //   display: inline-block;
  // }
  
  nav {
    display: inline-block;
    
    ul {
      display: flex;
      gap: 8px;
      
      li {
        font-size: 1.5em;
        font-weight: 600;
      }
    }
  }
`

const Header = () => {
  const headerElement = useRef()
  useEffect(() => {
    const height = headerElement.current.clientHeight
    console.log(height)
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  })
  const headerNav = [
    {name: "홈", path: "first"},
    {name: "명함", path: "business-card"},
    {name: "프로필", path: "profile"},
  ]
  return (
    <HeaderStyle ref={headerElement}>
      <div>
        {/*<h1><a href={"#first"}>박희찬</a></h1>*/}
        <nav>
          <ul>
            {headerNav.map(i => (
              <li><a href={"#" + i.path}>{i.name}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header