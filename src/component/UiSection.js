import "./uiSection.css"
import React from "react";

export const UiSection = ({toastMessage}) => {
  return (
    <section className="ui-section">
      <div className="toast-message-wrap">
        {toastMessage.map(i => (
          <div className="toast-message" key={i.id}>
            <h3 className="title">{i.title}</h3>
            <p  className="message">{i.message}</p>
          </div>
        ))}
      </div>
    </section>
  )
}