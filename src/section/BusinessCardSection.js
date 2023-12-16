import style from "./businessCardSection.css"

import {useContext, useState} from "react";
import edcanLogo from "../assets/edcan.svg";
import edcanTypo from "../assets/edcan_typo.svg";

import {UiDispatch} from "../App";

export function BusinessCardSection() {
  const uiDispatch = useContext(UiDispatch)

  const [businessCardState, setBusinessCardState] = useState({
    isReverse: false, xDeg: 0.0, yDeg: 0.0
  })

  function cardMouseMove(event) {
    const {left, top, width, height} = event.currentTarget.getBoundingClientRect()
    const {clientX, clientY} = event

    const x = clientX - left
    const y = clientY - top

    const xDeg = Math.round(-25 + 50 / height * y)
    const yDeg = Math.round(25 - 50 / width * x)


    setBusinessCardState(prev => {
      return {...prev, xDeg, yDeg}
    })
  }

  return (
    <section style={style} className="business-card-section full-section">
      <div
        className={`business-card-wrap ${businessCardState.isReverse ? "reverse" : ""}`}
        style={{transform: `perspective(2000px) rotateX(${businessCardState.xDeg}deg) rotateY(${businessCardState.yDeg}deg)`}}
        onMouseMove={cardMouseMove}
        onMouseOut={() => {
          setBusinessCardState(prev => (
            {...prev, xDeg: 0, yDeg: 0}
          ))
        }}>
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
              <span className="pointer" onClick={() => {
                uiDispatch({
                  type: "TOAST_APPEND",
                  toast: {
                    title: "이메일 복사 완료",
                    message: "이메일 복사됨",
                  },
                })
                navigator.clipboard.writeText("ckstmznf@naver.com")
              }}>ckstmznf@naver.com</span>
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
        </div>
        <div className="back">
          <img src={edcanTypo} alt="EDCAN 로고"/>
        </div>
      </div>

      <div className="btn revers-card"
           onClick={() => {
             setBusinessCardState(prev => {
               return {...prev, isReverse: !prev.isReverse}
             })
           }}
      >명함 뒤집기
      </div>
    </section>
  )
}