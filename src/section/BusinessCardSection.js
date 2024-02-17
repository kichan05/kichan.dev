import styled from "styled-components";
import {BusinessCard} from "../component/BusunessCard";
import Button from "../component/Button";
import {useState} from "react";
import {GoSync} from "react-icons/go";

const BusinessCardSectionStyle = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p {
    color: ${p => p.theme.color.Gray6};
    font-size: 1em;
    
    margin-top: 16px;
  }
  
  button {
    margin-top: 32px;
    
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

export const BusinessCardSection = () => {
  const [cardState, setCardState] = useState({
    x: 0, y: 0,
    xDeg : 0.0, yDeg: 0.0,
    isReverse : false
  })

  const onMouseMove = (e) => {
    const {left, top, width, height} = e.currentTarget.getBoundingClientRect()
    const {clientX, clientY} = e

    const x = clientX - left
    const y = clientY - top

    const xDeg = Math.round(-25 + 50 / height * y)
    const yDeg = Math.round(20 - 40 / width * x)
    setCardState({...cardState, xDeg, yDeg, x, y})
  }

  const onMouseOut = () => {
    setCardState({...cardState, xDeg: 0.0, yDeg: 0.0})
  }

  const reverseBusinessCard = () => {
    setCardState({...cardState, isReverse: !cardState.isReverse})
  }

  return (
    <BusinessCardSectionStyle id={"business-card"}>
      <BusinessCard
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
        cardState={cardState}/>

      <p>저를 실제로 만나시면 이 명함을 드립니다</p>

      <button onClick={reverseBusinessCard}>
        <GoSync />
        명함 뒤집기
      </button>
    </BusinessCardSectionStyle>
  )
}