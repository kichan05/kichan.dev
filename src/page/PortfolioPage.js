import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import MockUp from "./../assets/Membeder 목업.png"
import {useEffect, useState} from "react";

const PortfolioPageStyle = styled.div`
  ${PageBasicStyle}
  section {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
  
  .mock-up {
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
      width: 100%;
      height: 100%;
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
    scale: 1,
    borderRadius: 0,
  })

  const scrollEvent = (e) => {
    const marginGap = Math.min(32, window.scrollY * 32 / 300)
    const scale = Math.max(0, -5 / 100000 * window.scrollY + 1)

    let borderRadius
    if(window.scrollY > 0){
      borderRadius = 10
    }
    else {
      borderRadius = 0
    }
    setImageScale({scale, marginGap, borderRadius})
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
              transform: `scale(${imageScale.scale})`,
              borderRadius: `${imageScale.borderRadius}px`
            }}
          />
        </section>
        <section>

        </section>
        <section>대충 내용</section>
        <section>대충 내용</section>
        <section>대충 내용</section>
      </div>
    </PortfolioPageStyle>
  )
}