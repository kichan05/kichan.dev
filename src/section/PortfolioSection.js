import './portfolioSection.css'
import {useState} from "react";
import Membeder from "./../assets/Membeder.png"
import {IoArrowForward, IoReturnDownForwardOutline} from "react-icons/io5";

export function PortfolioSection() {
  const [portfolio, setPortfolio] = useState([
    {
      id: 1, name: "Membeder", color: "#6456FF",
      mainMessage: "2022 선린 디지털콘텐츠경진대회 동상",
      role : "팀장 / Android 개발자",
      icon : Membeder
    },
    {
      id: 2, name: "Membeder", color: "#6456FF",
      mainMessage: "2022 선린 디지털콘텐츠경진대회 동상",
      role : "팀장 / Android 개발자",
      icon : Membeder
    },
    {
      id: 3, name: "Membeder", color: "#6456FF",
      mainMessage: "2022 선린 디지털콘텐츠경진대회 동상",
      role : "팀장 / Android 개발자",
      icon : Membeder
    },
    {
      id: 4, name: "Membeder", color: "#6456FF",
      mainMessage: "2022 선린 디지털콘텐츠경진대회 동상",
      role : "팀장 / Android 개발자",
      icon : Membeder
    },
  ])

  return (
    <section className="portfolio-section">
      <div className="content">
        <h1>포트폴리오</h1>
        <ul className="portfolio-list">
          {portfolio.map(i => (
            <li key={ i.id } className="portfolio-item">
              <img
                src={ i.icon }
                className="portfolio-icon" alt={`${i.name} 아이콘`}
                style={{boxShadow : `0px 10px 15px 1px ${i.color}`}}
              />
              <div className="content-wrap">
                <div className="title-wrap">
                  <div className="title">{ i.name }</div>
                  <div className={"go-detail"}>
                    <span>자세히보기</span>
                    <IoArrowForward />
                  </div>
                </div>
                <div className="main-message">{ i.mainMessage }</div>
                <div className="main-message">{ i.role }</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}