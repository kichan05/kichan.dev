import styled, {css} from "styled-components";
import Pin from "./../assets/ic_pin.png"
import {useState} from "react";

const ProfileListStyle = styled.li`
  word-break: unset;
  list-style: none;
  
  position: relative;
  padding-left: 24px;
  
  &::before {
    content: "";
    width: 17px;
    height: 17px;
    
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${Pin});
    background-size: cover;
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

    margin-top: 6px;
    font-size: 1.25em;

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

export const ProfileList = ({title, date, children}) => {
  const [a, setA] = useState(false)

  return (
    <ProfileListStyle a={a} onClick={() => setA(!a)}>
      <div className="title-wrap">
        <h3>{title}</h3>
        <span className="date">{date}</span>
      </div>
      {children && <div className="description-wrap">
        {children}
      </div>}
    </ProfileListStyle>
  )
}