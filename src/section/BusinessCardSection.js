import style from "./businessCardSection.css"

import { useState } from "react";
import { BusinessCard } from "../component/BusinessCard";
import {IoRefresh} from "react-icons/io5";

export function BusinessCardSection() {

  const [cardState, setCardState] = useState({
    isReverse: false, xDeg: 0.0, yDeg: 0.0
  })

  const [mouseEddectState, setmouseEddectState] = useState({left : 0, top : 0})

  function cardMouseMove(event) {
    const {left, top, width, height} = event.currentTarget.getBoundingClientRect()
    const {clientX, clientY} = event

    const x = clientX - left
    const y = clientY - top

    const xDeg = Math.round(-25 + 50 / height * y)
    const yDeg = Math.round(20 - 40 / width * x)

    setCardState({...cardState, xDeg, yDeg})
    setmouseEddectState({left : x, top : y})
  }

  return (
    <section
      style={style}
      className="business-card-section full-section">

      <BusinessCard
        cardState={cardState}
        onMouseMove={cardMouseMove}
        onMouseOut={() => {
          setCardState({...cardState, xDeg: 0, yDeg: 0})
        }}
        mouseState={mouseEddectState}
      />

      <div className="tmi-message">저를 실제로 만나시면 이 명함을 드립니다</div>

      <div
        className="btn revers-card"
        onClick={() => {
          setCardState({...cardState, isReverse: !cardState.isReverse})
        }}>
        <IoRefresh />
        <span>명함 뒤집기</span>
      </div>
    </section>
  )
}