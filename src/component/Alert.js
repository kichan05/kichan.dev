import styled from "styled-components";
import {useState} from "react";
import { v4 } from "uuid";
import {useUiState} from "../context/UiReducer";

const AlertStyle = styled.ul`
  display: inline-block;
  
  position: fixed;
  top: 8px;
  right: 12px;
  
  li {
    width: 350px;
    
    background-color: ${p => p.theme.color.Blue3};
    border-radius: 0.25em;
    padding: 12px;
    margin-bottom: 8px;
    
    .title {
      font-size: 1.1em;
      font-weight: bold;
    }
    
    p {
      margin-top: 4px;
    }
  }
`

export const Alert = ({alertMessage}) => {
  // const [alertMessage, setAlertMessage] = useState([
  //   {id: v4(), title: "대충 제목", message: "대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용"},
  //   {id: v4(), title: "대충 제목", message: "대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용"},
  //   {id: v4(), title: "대충 제목", message: "대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용"},
  // ])

  return (
    <AlertStyle>
      {alertMessage.map(message => (
        <li key={message.id}>
          <div className="title">{message.title}</div>
          <p>{message.message}</p>
        </li>
      ))}
    </AlertStyle>
  )
}