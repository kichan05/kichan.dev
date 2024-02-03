import styled from "styled-components";
import {BusinessCard} from "../component/BusunessCard";

const BusinessCardSectionStyle = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);
`

export const BusinessCardSection = () => {
  return (
    <BusinessCardSectionStyle>
      <BusinessCard/>
    </BusinessCardSectionStyle>
  )
}