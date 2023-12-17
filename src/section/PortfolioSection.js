import './portfolioSection.css'
import {useState} from "react";
import {IoArrowForward} from "react-icons/io5";
import portfolioList from "./../data/Portfolio"
import {Link} from "react-router-dom";

export function PortfolioSection() {
  const [portfolio, setPortfolio] = useState(portfolioList)

  return (
    <section className="portfolio-section">
      <div className="content">
        <h1>포트폴리오</h1>
        <ul className="portfolio-list">
          {portfolio.map(i => (
            <li key={i.id} className="portfolio-item">
              <img
                src={i.icon}
                className="portfolio-icon" alt={`${i.name} 아이콘`}
                style={{boxShadow: `0px 10px 15px 1px ${i.color}`}}
              />
              <div className="content-wrap">
                <div className="title-wrap">
                  <div className="title">{i.name}</div>
                  <div className={"go-detail"}>
                    <Link to={`/portfolio/${i.id}`}>
                      <span>자세히보기</span>
                      <IoArrowForward/>
                    </Link>
                  </div>
                </div>
                <div className="main-message">{i.mainMessage}</div>
                <div className="main-message">{i.role}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}