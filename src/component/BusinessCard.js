import classNames from "classnames";
import edcanLogo from "../assets/edcan.svg";
import edcanTypo from "../assets/edcan_typo.svg";

export const BusinessCard = ({
 cardState, mouseState, onMouseMove, onMouseOut, onEmailCopy,
 }) => {
  const cardStyle = {
    transform: `perspective(2000px) rotateX(${cardState.xDeg}deg) rotateY(${cardState.yDeg}deg)`
  };
  return (
    <div
      className={classNames("business-card-wrap", {reverse: cardState.isReverse})}
      style={cardStyle}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}>
      <div className="front">
        <div className="edcan-logo-wrap">
          <img src={edcanLogo} alt="EDCAN 로고"/>
        </div>
        <div className="name-wrap">
          <h2>박희찬</h2>
          <h3>Developer</h3>
        </div>
        <div className="content-wrap">
          <div className="tel-wrap">
            <div className="tel-title title">학력</div>
            <div className="tel-content content">선린인터넷고등학교</div>
            <div className="tel-content content">소프트웨어과 재학 (2021~)</div>
          </div>
          <div className="mail-wrap">
            <div className="mail-title title">
              MAIL
            </div>
            <div className="mail-content content">
              <span className="pointer" onClick={onEmailCopy}>ckstmznf@naver.com</span>
            </div>
          </div>
          <div className="link-wrap">
            <div className="link-title title">GITHUB</div>
            <div className="link-content content">
              <a href="https://www.github.com/kichan05" target="_blank">github.com/kichan05</a>
            </div>
          </div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="bottom">
          <img src={edcanTypo} alt=""/>
        </div>
        <div className="circle"></div>
        <div
          className="mouse-effect"
          style={mouseState}></div>
      </div>
      <div className="back">
        <img src={edcanTypo} alt="EDCAN 로고"/>
        <div
          className="mouse-effect"
          style={mouseState}></div>
      </div>
    </div>
  )
}