import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {FirstSection} from "../section/FirstSection";
import {BusinessCardSection} from "../section/BusinessCardSection";
import {ProfileSection} from "../section/ProfileSection";
import {ProjectSection} from "../section/ProjectSection";

const PageStyle = styled.div`
   ${PageBasicStyle};
`


const Page = () => {
  return (
    <PageStyle>
      <FirstSection/>
      {/*<Header/>*/}
      <BusinessCardSection/>
      <ProfileSection/>
      {/*<ProjectSection/>*/}
    </PageStyle>
  )
}

export default Page