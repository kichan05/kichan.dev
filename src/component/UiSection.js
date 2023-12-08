import "./uiSection.css"
import ic_x from "./../assets/ic_x.svg"
import React, {useContext} from "react";

import {UiDispatch} from "../App";

export const UiSection = ({toastMessage}) => {
  const uiDispatch = useContext(UiDispatch)

  return (
    <section className="ui-section">
      <div className="toast-message-wrap">
        {toastMessage.map(i => (
          <div className="toast-message" key={i.id}>
            <div className="header">
              <h3 className="title">{i.title}</h3>
              <img className="close-btn"
                   src={ic_x} alt="알림 닫기"
                   onClick={()=> {
                     uiDispatch({type : "TOAST_REMOVE", toastId : i.id})
                   }}
              />
            </div>
            <p className="message">{i.message}</p>
          </div>
        ))}
      </div>
    </section>
  )
}