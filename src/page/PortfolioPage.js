import {useParams} from "react-router-dom";
import data from "../data/Portfolio";
import "./PortfolioPage.css"
import {useEffect, useRef} from "react";
import {IoChevronBackOutline} from "react-icons/io5";

export const PortfolioPage = () => {
  const params = useParams()
  const mockUpImage = useRef()
  const portfolioData = data.portfolio[params.portfolilId]

  const handleScroll = (e) => {
    const marginGap = Math.min(32, window.scrollY * 32 / 300)
    mockUpImage.current.style.width = `calc(100% - ${marginGap}px)`
    mockUpImage.current.style.height = `calc(100% - ${marginGap}px)`

    if(window.scrollY > 0){
      mockUpImage.current.style.borderRadius = `10px`
    }
    else {
      mockUpImage.current.style.borderRadius = `0px`
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const mockupImageStyle = {
    backgroundImage : `url(${portfolioData.mockUp})`
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
      </div>
      <div className="detail">
        <div className="blank"></div>
        <div className="content page1">
          <h1>Membeder</h1>
          <p>팀이 만들어지는곳 Membeder</p>

          <p className="message1"></p>
        </div>
        <div className="content">
          <h1>Membeder</h1>
          <p>팀이 만들어지는곳 Membeder</p>
        </div>
        <div className="content">
          <h1>Membeder</h1>
          <p>팀이 만들어지는곳 Membeder</p>
        </div>
        <div className="content">
          <h1>Membeder</h1>
          <p>팀이 만들어지는곳 Membeder</p>
        </div>
      </div>
    </section>
  )
}