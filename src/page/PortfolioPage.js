import {useParams} from "react-router-dom";
import portfolio from "../data/Portfolio";
import "./PortfolioPage.css"
import {useEffect, useRef} from "react";
import m from "./../assets/Membeder 목업.png"

export const PortfolioPage = () => {
  const params = useParams()
  const mockUpImage = useRef()
  const portfolioData = portfolio[params.portfolilId]

  const handleScroll = (e) => {
    const scaleRate = Math.max(0.95, -0.04 / 400 * window.scrollY + 1)
    console.log(window.scrollY, scaleRate)
    mockUpImage.current.style.transform = `scale(${scaleRate})`
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const mockupImageStyle = {
    backgroundImage : `url(${m})`
  }

  return (
    <section className={"portfolio-page"}>
      <div
        className="bg-wrap"
        style={{backgroundColor : portfolioData.color}}
      >
        <div
          style={mockupImageStyle}
          className="img" ref={mockUpImage}></div>
        {/*<img*/}
        {/*  ref={mockUpImage}*/}
        {/*  src={portfolioData.mockUp} alt={`${portfolioData.name} 목업 이미지`}/>*/}
      </div>
      <div className="detail">
        <div className="blank"></div>
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
      </div>
    </section>
  )
}