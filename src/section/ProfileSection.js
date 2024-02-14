import styled from "styled-components";
import {GoCommandPalette, GoDotFill, GoPin, GoTriangleRight} from "react-icons/go";
import {BsBraces, BsFillPinFill} from "react-icons/bs";

const ProfileSectionStyle = styled.section`
  padding: 40px 24px;
  background-color: ${p => p.theme.color.Gray0};

  h2 {
    color: ${p => p.theme.color.Gray9};
    font-size: 2em;
  }

  ul {
    padding: 0 8px;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

const ProfileList = ({title, date, children}) => {
  const ProfileListStyle = styled.li`
    word-break: unset;
    
    .list-icon {
      font-size: 14px;
      margin: 2px 8px 1px 8px;
    }

    h3 {
      color: ${p => p.theme.color.Gray9};
      font-weight: 500;
      font-size: 1.3em;

      display: inline-block;
    }

    .date {
      color: ${p => p.theme.color.Gray6};
      font-size: 1em;

      margin-left: 6px;
    }

    .description-wrap {
      color: ${p => p.theme.color.Gray7};

      padding-left: 30px;

      margin-top: 5px;
      font-size: 1.05em;

      line-height: 19px;
    }

    a {
      color: ${p => p.theme.color.HeechanBlue};
      font-weight: 600;
      transition: 100ms;
    }

    a:hover {
      text-decoration: underline;
    }
  `

  return (
    <ProfileListStyle>
      <div className="title-wrap">
        <BsFillPinFill className={"list-icon"}/>
        <h3>{title}</h3>
        <span className="date">{date}</span>
      </div>
      {children && <div className="description-wrap">
        {children}
      </div>}
    </ProfileListStyle>
  )
}

export const ProfileSection = () => {
  const profileData = [
    {
      title: "선린 116기 소프트웨어과 졸업",
      date: "2021.03 ~ 2024.02",
    },
  ]

  return (
    <ProfileSectionStyle>
      <h2>저의 활동 내역이에요</h2>
      <ul>
        {profileData.map(p => (
          <ProfileList
            title={p.title}
            date={p.date}>{p.description}</ProfileList>
        ))}

        {/*<ProfileList*/}
        {/*  title={"EDCAN 8기 부장"}*/}
        {/*  date={"2021.11 ~ 2022.11"}>*/}
        {/*  모바일콘텐츠 개발반 EDCAN의 8기 부부장으로 활동했습니다.*/}
        {/*  <br/>*/}
        {/*  동아리를 총괄하고 수업 준비, 행사 준비를 하면서 1년동안 동아리를 이끌어 갔습니다.*/}
        {/*  <br/><br/>*/}
        {/*  <a href="https://velog.io/@ckstmznf/지난-1년간-전공동아리를-이끌어보았다" target={"_blank"}>동아리 부장 회고록</a>을 참고해주세요*/}
        {/*</ProfileList>*/}
      </ul>
    </ProfileSectionStyle>
  )
}