import {useState} from "react";
import edcanLogo from "../edcan.svg";
import edcanTypo from "../edcan_typo.svg";

export function BusinessCardPage() {
  const [isReverse, setIsReverse] = useState(false)
  const [businessCardXDegg, setBusinessCardXDegg] = useState(0.0)
  const [businessCardYDegg, setBusinessCardYDegg] = useState(0.0)

  return <section className="page1">
    <div className={`business-card-wrap ${isReverse ? "reverse" : ""}`}
         style={{transform : `rotateX(${businessCardXDegg}deg) rotateY(${businessCardYDegg}deg)`}}
         onMouseMove={(event) => {
           const {left, top, width, height} = event.currentTarget.getBoundingClientRect()
           const {clientX, clientY} = event
           const x = clientX - left
           const y = clientY - top

           const halfWidth = width / 2
           const halfHeight = height / 2

           const xHalfDistance = Math.abs(halfWidth - x)
           const yHalfDistance = Math.abs(halfHeight - y)

           let xDegree = 26 * xHalfDistance / halfWidth * (y < halfHeight ? 1 : -1)
           let yDegree = 26 * yHalfDistance / halfHeight * (x < halfWidth ? 1 : -1)

           setBusinessCardXDegg(xDegree)
           setBusinessCardYDegg(yDegree)
         }}
         onMouseOut={(event) => {
           setBusinessCardXDegg(0)
           setBusinessCardYDegg(0)
         }}
      >
      <div className="front">
        <div className="edcan-logo-wrap">
          {isReverse}
          <img src={edcanLogo}/>
        </div>
        <div className="name-wrap">
          <h2>박희찬</h2>
          <h3>Developer</h3>
        </div>
        <div className="content-wrap">
          <div className="tel-wrap">
            <div className="tel-title title">TEL</div>
            <div className="tel-content content">010-0000-0000</div>
          </div>
          <div className="mail-wrap">
            <div className="mail-title title">MAIL</div>
            <div className="mail-content content">ckstmznf@naver.com</div>
          </div>
          <div className="link-wrap">
            <div className="link-title title">GITHUB</div>
            <div className="link-content content">github.com/kichan05</div>
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
      </div>
      <div className="back">
        <img src={edcanTypo}/>
      </div>
    </div>


    <div className="btn revers-card"
      onClick={() => {setIsReverse(!isReverse)}}
    >명함 뒤지기</div>
  </section>;
}