import "./uiSection.css"
import ic_x from "./../assets/ic_x.svg"
import React, {useContext, useEffect} from "react";

import {UiDispatch} from "../App";

export const UiSection = ({toastMessage}) => {
  const uiDispatch = useContext(UiDispatch)

  function ToastMessage({ toast }) {
    return (
      <div className="toast-message" key={toast.id}>
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
  }

  return (
    <section className="ui-section">
      <div className="toast-message-wrap">
        {toastMessage.map(i => (
          <ToastMessage toast={i}/>
        ))}
      </div>
    </section>
  )
}