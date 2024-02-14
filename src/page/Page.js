import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {FirstSection} from "../section/FirstSection";
import {BusinessCardSection} from "../section/BusinessCardSection";
import {ProfileSection} from "../section/ProfileSection";

const PageStyle = styled.div`
   ${PageBasicStyle};
`

const Page = () => {
  return (
    <PageStyle>
      <FirstSection/>
      <BusinessCardSection/>
      <ProfileSection/>
    </PageStyle>
  )
}

export default Page