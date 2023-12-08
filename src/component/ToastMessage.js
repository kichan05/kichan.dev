import React, {useContext, useEffect, useState} from "react";
import {UiDispatch} from "../App";

import ic_x from "../assets/ic_x.svg";
import "./toastMessage.css"

const ToastMessage = ({ toast }) => {
  const uiDispatch = useContext(UiDispatch)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      uiDispatch({type: "TOAST_REMOVE", toastId: toast.id})
    }, 3000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <div className={`toast-message`}>
      <div className="header">
        <h3 className="title">{toast.title}</h3>
        <img className="close-btn"
             src={ic_x} alt="알림 닫기"
             onClick={() => {
               uiDispatch({type: "TOAST_REMOVE", toastId: toast.id})
             }}
        />
      </div>
      <p className="message">{toast.message}</p>
    </div>
  )
};

export default ToastMessage