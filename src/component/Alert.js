import styled, {css} from "styled-components";
import React, {useEffect, useRef, useState} from "react";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import {GoX, GoArchive} from "react-icons/go";
import {IconButton} from "./IconButton";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Pin from "./../assets/ic_pin.png"

const AlertStyle = styled.ul`
  display: inline-block;
  
  position: fixed;
  top: 8px;
  right: 12px;
  
  pointer-events: visible;
`

const AlertMessageStyle = styled.li`
  width: 350px;

  background-color: ${p => p.theme.color.Gray1};
  border: 1px solid ${p => p.theme.color.Gray4};
  border-left: 5px solid ${p => {
    if(p.color)
      return p.color
    else
      return p.theme.color.Blue5
  }};
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
    
    img {
      width: 20px;
    }
  }
  
  &:hover .close-icon {
    opacity: 1;
  }

  p {
    margin-top: 2px;
  }
`

const AlertMessage = ({state, message, timeout}) => {
  const uiDispatch = useUiDispatch()
  let removeTimeOut = useRef()

  const removeMessage = (id) => {
    uiDispatch({type: UI_ACTION_TYPE.alert_message_remove, id})
  }

  useEffect(() => {
    removeTimeOut.current = setTimeout(() => {
      removeMessage(message.id)
    }, 5000)
    console.log(removeTimeOut.current)

    return () => {
      console.log("unmount alert")
    }
  }, [])

  return (
    <AlertMessageStyle state={state} timeout={timeout} color={message.color}>
      <div className="title-wrap">
        <div className="title">{message.title}</div>
        <div className="icon-wrap">
          <IconButton
            width={24}
            size={20}
            className={"close-icon"}
            onClick={() => {
              clearTimeout(removeTimeOut.current)
            }}
          ><img src={Pin} alt=""/></IconButton>
          <IconButton
            width={24}
            size={20}
            className={"close-icon"}
            onClick={() => removeMessage(message.id)}
          ><GoX/></IconButton>
        </div>
      </div>
      <p>{message.message}</p>
    </AlertMessageStyle>
  )
}

const Alert = ({alertMessage}) => {
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

export default React.memo(Alert)