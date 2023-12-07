import "./style/font_s_core.css"
import "./style/font_pretendard.css"
import './style/App.css';

import {FirstSection} from "./component/FirstSection";
import {BusinessCardSection} from "./component/BusinessCardSection";
import {PortfolioSection} from "./component/PortfolioSection";
import {UiSection} from "./component/UiSection";

import {useRef, useState} from "react";
import React from "react";

export const UiDispatch = React.createContext(null)

function App() {
  const toastId = useRef(0)
  const [toastMessage, setToastMessage] = useState([
    {id: 1, title: "제에ㅔㅔ에에ㅔ목 1", message: "내내ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ용"},
  ])

  const appendToast = (toast) => {
    setToastMessage(prev => prev.concat({...toast, id: toastId.current}))
    toastId.current += 1
  }

  return (
    <div className="App">
      <UiDispatch.Provider value={appendToast}>
        <FirstSection/>
        <BusinessCardSection/>
        <PortfolioSection/>
        <UiSection toastMessage={toastMessage}/>
      </UiDispatch.Provider>
    </div>
  );
}

export default App;
