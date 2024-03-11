import styled from "styled-components";

import Membeder from "./../assets/Membeder 목업.png"

const ProjectSectionStyle = styled.section`
  padding: 40px 24px;
  background-color: ${p => p.theme.color.Gray0};

  .content {
    max-width: ${p => p.theme.size.mobileMaxWidth}px;
    margin: 0 auto;
  }

  h2 {
    color: ${p => p.theme.color.Gray9};
    font-size: 2em;
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  
  .project-item {
    aspect-ratio: 4 / 3;
    border-radius: 24px;
    overflow: hidden;
    
    display: flex;
    flex-direction: column;
    
    .thumbnail {
      flex: 1;
      
      overflow: hidden;
      
      img {
        width: 100%;
        object-fit: cover;
        
        transition: 100ms;
      }
    }
    
    .description {
      background-color: ${p => p.theme.color.Gray4};
      padding: 16px 12px;
    }
    
    &:hover img {
      transform: scale(1.2);
    }
  }
`

export const ProjectSection = () => {
  return (
    <ProjectSectionStyle m={Membeder}>
      <div className="content">
        <h2>제가 만든 프로젝트들이에요</h2>

        <ul>
          <li className={"project-item"}>
            <div className="thumbnail">
              <img src={Membeder} alt=""/>
            </div>
            <div className={"description"}>
              <h4>Membeder</h4>
              <p>IT 직군 사람들을 위한 팀빌딩 어플리케이션<br/>프로젝트 팀장과 Android개발을 담당했습니다.</p>
            </div>
          </li>
        </ul>

      </div>
    </ProjectSectionStyle>
  )
}