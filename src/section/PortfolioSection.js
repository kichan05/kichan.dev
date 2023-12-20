import './portfolioSection.css'
import data from "../data/Portfolio"
import {PortfolioListItem} from "../component/PortfolioListItem";
import What from "./../assets/what.png"

export function PortfolioSection() {
  console.log(data)
  return (
    <section className="portfolio-section">
      <div className="content">
        <div className="portfolio-wrap">
          <div className={"wrap-title"}>Portfolio</div>
          <p className={"wrap-descript"}>제가 직접 공부하며 만든 작품들입니다.</p>
          <ul className="portfolio-list">
            {data.portfolio.map(i => (
              <PortfolioListItem
                portfolio={i}
                detailPath={`/portfolio/${i.id}`}
              >
                <div className="main-message">{i.mainMessage}</div>
                <div className="main-message">{i.role}</div>
              </PortfolioListItem>
            ))}
          </ul>
        </div>


        <div className="aword-wrap">
          <div className={"wrap-title"}>Aword</div>
          <p className={"wrap-descript"}>제가 직접 경험하며 수상한 실적들입니다.</p>
          <ul className="aword-list">
            {data.aword.map(i => (
              <PortfolioListItem
                portfolio={i}
              >
                <div className="main-message">{i.year}년 / <span style={{color : "#571500"}}>{i.aword}</span></div>
                <div className="main-message">{i.role}</div>
                <div className="main-message">주최 : {i.host}</div>
              </PortfolioListItem>
            ))}
            <li className="portfolio-item what-is-next">
              <img src={What} alt="물음표 아이콘" className="icon"/>
              <div className="content">
                <span>What is Next?</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}