import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {FirstSection} from "../section/FirstSection";

const PageStyle = styled.div`
   ${PageBasicStyle};
`

const Page = () => {
  return (
    <PageStyle>
      <FirstSection/>
    </PageStyle>
  )
}

export default Page