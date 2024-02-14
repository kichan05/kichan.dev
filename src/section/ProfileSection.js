import styled from "styled-components";
import {ProfileList} from "../component/ProfileList";
import {profileData} from "../data/ProfileData";

const ProfileSectionStyle = styled.section`
  padding: 40px 24px;
  background-color: ${p => p.theme.color.Gray0};

  h2 {
    color: ${p => p.theme.color.Gray9};
    font-size: 2em;
  }

  ul {
    font-size: 14px;
    
    padding: 0 8px;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`


export const ProfileSection = () => {
  return (
    <ProfileSectionStyle>
      <h2>저의 활동 내역이에요</h2>
      <ul>
        {profileData.map((p, i) => (
          <ProfileList
            key={i}
            profile={p}/>
        ))}
      </ul>
    </ProfileSectionStyle>
  )
}