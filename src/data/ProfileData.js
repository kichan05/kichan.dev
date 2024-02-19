import Pin from "../assets/ic_pin.png";
import Trophy from "../assets/ic_trophy.png";
import Design from "../assets/ic_design.png"

export const profileData = [
  {
    title: "선린인터넷고등학교 116기 소프트웨어과 졸업",
    date: "2021.03 ~ 2024.02",
    icon: Pin,
  },
  {
    title: "EDCAN 8기 부장",
    date: "2021.11 ~ 2022.11",
    description: (
      <>
        모바일콘텐츠 개발반 <a href={"https://edcan.kr"} target={"_blank"}>EDCAN</a>의 8기 부장으로 활동했습니다.
        <br/>
        동아리를 총괄하고 수업 준비, 행사 준비, 예산 관리를 하면서 1년동안 동아리를 이끌어 갔습니다.
        <br/><br/>
        <a href="https://velog.io/@ckstmznf/지난-1년간-전공동아리를-이끌어보았다" target={"_blank"}>동아리 부장 회고록</a>을 참고해주세요
      </>
    ),
    icon: Pin,
  },
  {
    title: "2022 소프트웨어 나눔 축제 캠프 총괄",
    date: "2022.04 ~ 2022.08",
    description: (
      <>
        선린인터넷고등학교가 주관, 주최하는 2022 소프트웨어 나눔축제의 캠프 총괄로 활동했습니다.
        <br/>
        EDCAN 캠프(AndroidStudio로 나만의 일기장 앱 만들기)를 운영했습니다.
        <br/><br/>
        <a href="https://velog.io/@ckstmznf/SSF2022" target={"_blank"}>캠프 총괄 회고록</a>을 참고해주세요
      </>
    ),
    icon: Pin,
  },
  {
    title: "2023 선린 장학생",
    date: "2023.09", //todo : 날자가 언제였지
    icon: Pin,
  },
  {
    title: "제 8회 선린 해커톤 동상 수상",
    date: "2022.07",
    description: (
      <>
        제 8회 선린 해커톤에서 <b>생존</b>이라는 주제로
        <br/>
        재난 신고 커뮤니티 <b>위그비</b>를 개발하여 동상을 수상하였습니다.
        <br/>
        팀에서 Android 개발을 총괄했습니다.
        <br/><br/>
        <a href="https://www.youtube.com/watch?v=by67z0esb0c" target={"_blank"}>위그비 소개 영상</a>을 참고해주세요.
      </>
    ),
    icon: Trophy,
  },
  {
    title: "2022 선린 디지털 콘텐츠 경진대회 동상 수상",
    date: "2022.12",
    description: (
      <>
        2022년 선린 디지털콘텐츠 경진대회에서
        <br/>
        IT업종 종사자를 위한 팀빌딩 서비스 <b>Membeder</b>를 개발했고
        <br/>
        동상을 수상했습니다. 팀에서는 <b>팀장과 Android 개발 총괄</b>을 진행했습니다.
        <br/><br/>
        <a href="https://github.com/Membeder" target={"_blank"}>깃허브</a>와 <a href="https://drive.google.com/drive/u/2/folders/1ZTcMfxDe91gHJKYtdRO9Q7g_JvkeEoCX" target={"_blank"}>프로젝트 설명서</a>를 참고해주세요
      </>
    ),
    icon: Trophy,
  },
  {
    title: "2023 선린 천하제일코딩대회 디자인 총괄",
    date: "2023.04 ~ 2023.07",
    description: (
      <>
        2023 선린 천하제일코딩대회에서 디자인 총괄을 맡아서<br/>
        대회 전체적인 디자인과 포스터 현수막, 티셔츠 등을 디자인했습니다.
        <br/><br/>
        자세한 내용은 <a href="https://velog.io/@ckstmznf/2023-선린-천하제일-코딩대회-스탭참가-후기" target={'_blank'}>대회 진행 후기</a>와
        <a href="#" target={"_blank"}>디자인 결과물</a>을 참고해주세요
        {/*Todo : 천코대 디자인 결과물 url 추가*/}
      </>
    ),
    icon: Design
  },
]