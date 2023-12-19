import {useParams} from "react-router-dom";
import portfolio from "../data/Portfolio";
import "./PortfolioPage.css"
import {useEffect, useRef} from "react";

export const PortfolioPage = () => {
  const params = useParams()
  const mockUpImage = useRef()
  const portfolioData = portfolio[params.portfolilId]

  const handleScroll = (e) => {
    const scaleRate = Math.min(30, window.scrollY / 10)
    mockUpImage.current.style.width = `calc(100% - ${scaleRate}px)`
    mockUpImage.current.style.height = `calc(100% - ${scaleRate}px)`

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
        <div className="content">
          <h1>Membeder</h1>
          <p>팀이 만들어지는곳 Membeder</p>
        </div>
      </div>
    </section>
  )
}