import {Link} from "react-router-dom";
import {IoArrowForward} from "react-icons/io5";
import "./PortfolioListItem.css"

export function PortfolioListItem({portfolio, children, detailPath}) {
  return (
    <li key={portfolio.id} className="portfolio-item">
      <img
        src={portfolio.icon}
        className="portfolio-icon" alt={`${portfolio.name} 아이콘`}
        style={{boxShadow: `0px 15px 35px 0 ${portfolio.color}`}}
      />
      <div className="content-wrap">
        <div className="title-wrap">
          <div className="title">{portfolio.name}</div>
          {
            detailPath && <div className={"go-detail"}>
              <Link to={detailPath} lReset={false}>
                <span>자세히보기</span>
                <IoArrowForward/>
              </Link>
            </div>
          }
        </div>
        { children }
      </div>
    </li>
  )
}