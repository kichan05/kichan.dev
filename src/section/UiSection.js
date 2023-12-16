import "./uiSection.css"
import ToastMessage from "../component/ToastMessage.js";

export const UiSection = ({toastMessage}) => {
  return (
    <section className="ui-section">
      <div className="toast-message-wrap">
        {toastMessage.map(i => (
          <ToastMessage key={i.id} toast={i}/>
        ))}
      </div>
    </section>
  )
}