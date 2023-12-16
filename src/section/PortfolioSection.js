import './portfolioSection.css'
import {useState} from "react";

export function PortfolioSection() {
  const [portfolio, setPortfolio] = useState([
    {
      id: 1, name: "Membeder", color: "#6456FF",
      mainMessage: "2023 선린 디지털콘텐츠 경진대회 동상 수상작",
    },
    {
      id: 2, name: "Membeder", color: "#6456FF",
      mainMessage: "2023 선린 디지털콘텐츠 경진대회 동상 수상작",
    },
    {
      id: 3, name: "Membeder", color: "#6456FF",
      mainMessage: "2023 선린 디지털콘텐츠 경진대회 동상 수상작",
    },
    {
      id: 4, name: "Membeder", color: "#6456FF",
      mainMessage: "2023 선린 디지털콘텐츠 경진대회 동상 수상작",
    },
  ])
  return (
    <section className="portfolio-section">
      <div className="content">
        <h1>포트폴리오</h1>
        <ul>
          {portfolio.map(i => (
            <li key={i.id}>

            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}