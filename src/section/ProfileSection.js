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
    font-size: 14px;
    
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
      font-size: 1.1em;

      line-height: 19px;
    }

    a {
      color: ${p => p.theme.color.HeechanBlue};
      font-weight: 500;
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
    {
      title: "EDCAN 8기 부장",
      date: "2021.11 ~ 2022.11",
      description: <>
        모바일콘텐츠 개발반 <a href={"https://edcan.kr"} target={"_blank"}>EDCAN</a>의 8기 부부장으로 활동했습니다.
        <br/>
        동아리를 총괄하고 수업 준비, 행사 준비를 하면서 1년동안 동아리를 이끌어 갔습니다.
        <br/><br/>
        <a href="https://velog.io/@ckstmznf/지난-1년간-전공동아리를-이끌어보았다" target={"_blank"}>동아리 부장 회고록</a>을 참고해주세요
      </>
    },
    {
      title: "2022 소프트웨어 나눔 축제 캠프 총괄",
      date: "2022.04 ~ 2022.08",
      description: <>
        선린인터넷고등학교가 주관, 주최하는 2022 소프트웨어 나눔축제의 캠프 총괄로 활동했습니다.
        <br/>
        EDCAN 캠프(AndroidStudio로 나만의 일기장 앱 만들기)를 운영했습니다.
        <br/><br/>
        <a href="https://velog.io/@ckstmznf/SSF2022" target={"_blank"}>캠프 총괄 회고록</a>을 참고해주세요
      </>
    },
    {
      title: "제 8회 선린 해커톤 동상 수상",
      data: "2022.07",
    },
    {
      title: "2022 선린 디지털 콘텐츠 경진대회 동상 수상",
      data: "2022.12",
    },
    {
      title: "2023 선린 천하제일코딩대회 디자인 총괄",
      data: "2023.04 ~ 2023.07",
    }
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
      </ul>
    </ProfileSectionStyle>
  )
}