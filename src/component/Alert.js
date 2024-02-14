import styled, {css} from "styled-components";
import {useEffect, useState} from "react";
import { v4 } from "uuid";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import {logDOM} from "@testing-library/react";
import {GoX} from "react-icons/go";
import {IconButton} from "./IconButton";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const AlertStyle = styled.ul`
  display: inline-block;
  
  position: fixed;
  top: 8px;
  right: 12px;
  
  pointer-events: visible;
`

const AlertMessageStyle = styled.li`
  width: 350px;

  background-color: ${p => p.theme.color.Blue3};
  border-radius: 0.25em;
  padding: 12px;
  margin-bottom: 8px;
  
  opacity: 1;
  transition: ${p => p.timeout}ms;
  transform: translate(0, 0) rotateX(0deg);

  ${({state}) => (state === "entering") && css`
    opacity: 0;
    transform: translate(100px, 0);
  `}

  ${({state}) => (state === "exiting") && css`
    opacity: 0;
    transform: rotateX(-90deg);
  `}
  
  .title-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    font-size: 1.1em;
    font-weight: bold;
  }
  
  .close-icon {
    opacity: 0;
    transition: 200ms;
  }
  
  &:hover .close-icon {
    opacity: 1;
  }

  p {
    margin-top: 4px;
  }
`

const AlertMessage = ({state, message, timeout}) => {
  const uiDispatch = useUiDispatch()

  const removeMessage = (id) => {
    uiDispatch({type: UI_ACTION_TYPE.alert_message_remove, id})
  }

  useEffect(() => {
    const remove = setTimeout(() => {
      removeMessage(message.id)
    }, 5000)
  }, [])

  return (
    <AlertMessageStyle state={state} timeout={timeout}>
      <div className="title-wrap">
        <div className="title">{message.title}</div>
        <IconButton
          width={24}
          size={20}
          className={"close-icon"}
          onClick={() => removeMessage(message.id)}
        ><GoX/></IconButton>
      </div>
      <p>{message.message}</p>
    </AlertMessageStyle>
  )
}

export const Alert = ({alertMessage}) => {
  return (
    <AlertStyle>
      <TransitionGroup>
        {alertMessage.map(message => (
          <CSSTransition key={message.id} timeout={200}>
            {state => (
              <AlertMessage state={state} timeout={200} message={message}/>
            )}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </AlertStyle>
  )
}