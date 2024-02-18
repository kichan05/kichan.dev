import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import MockUp from "./../assets/Membeder 목업.png"
import {useEffect, useState} from "react";

const PortfolioPageStyle = styled.div`
  ${PageBasicStyle}
  .mock-up {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    
    background-color: #6456ff;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    img {
    }
  }

  main {
    width: 100%;
    height: 300vh;
  }
`

export const PortfolioPage = () => {
  const [imageScale, setImageScale] = useState({
    marginGap: 0,
    borderRadius: 0,
  })

  const scrollEvent = (e) => {
    const marginGap = Math.min(32, window.scrollY * 32 / 300)
    let borderRadius

    if(window.scrollY > 0){
      borderRadius = 10
    }
    else {
      borderRadius = 0
    }
    setImageScale({marginGap, borderRadius})
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent)

    return () => {
      window.removeEventListener("scroll", scrollEvent)
    }
  }, [imageScale])

  return (
    <PortfolioPageStyle imageScale={imageScale}>
      <div className="content">
        <section className={"mock-up"}>
          <img
            src={MockUp} alt={"Membeder 목업 이미지"}
            style={{
              width: `calc(100% - ${imageScale.marginGap}px)`,
              height: `calc(100% - ${imageScale.marginGap}px)`,
              borderRadius: `${imageScale.borderRadius}px`
            }}
          />
        </section>
        <main>
          대충 포폴 내용
        </main>
      </div>
    </PortfolioPageStyle>
  )
}