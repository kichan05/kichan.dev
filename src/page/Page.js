import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {FirstSection} from "../section/FirstSection";
import {BusinessCardSection} from "../section/BusinessCardSection";

const PageStyle = styled.div`
   ${PageBasicStyle};
`

const Page = () => {
  return (
    <PageStyle>
      <FirstSection/>
      <BusinessCardSection/>
    </PageStyle>
  )
}

export default Page