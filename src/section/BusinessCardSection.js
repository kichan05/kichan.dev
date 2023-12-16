import style from "./businessCardSection.css"

import {useContext, useState} from "react";

import {UiDispatch} from "../App";
import {BusinessCard} from "../component/BusinessCard";

export function BusinessCardSection() {
  const uiDispatch = useContext(UiDispatch)

  const [cardState, setCardState] = useState({
    isReverse: false, xDeg: 0.0, yDeg: 0.0
  })

  function cardMouseMove(event) {
    const {left, top, width, height} = event.currentTarget.getBoundingClientRect()
    const {clientX, clientY} = event

    const x = clientX - left
    const y = clientY - top

    const xDeg = Math.round(-20 + 40 / height * y)
    const yDeg = Math.round(20 - 40 / width * x)

    setCardState({...cardState, xDeg, yDeg})
  }

  const emailCopy = () => {
    uiDispatch({
      type: "TOAST_APPEND",
      toast: {
        title: "이메일 복사 완료",
        message: "이메일이 복사 되었습니다.",
      },
    })
    navigator.clipboard.writeText("ckstmznf@naver.com")
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
        onEmailCopy={emailCopy}
      />

      <div
        className="btn revers-card"
        onClick={() => {
          setCardState({...cardState, isReverse: !cardState.isReverse})
        }}>명함 뒤집기</div>
    </section>
  )
}