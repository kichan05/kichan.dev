import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {FirstSection} from "../section/FirstSection";
import {BusinessCardSection} from "../section/BusinessCardSection";
import {ProfileSection} from "../section/ProfileSection";
import Header from "../component/Header";

const PageStyle = styled.div`
   ${PageBasicStyle};
`

const Page = () => {
  return (
    <PageStyle>
      <FirstSection/>
      <Header/>
      <BusinessCardSection/>
      <ProfileSection/>
    </PageStyle>
  )
}

export default Page