import "./style/font_s_core.css"
import "./style/font_pretendard.css"
import './style/App.css';

import {FirstSection} from "./section/FirstSection";
import {BusinessCardSection} from "./section/BusinessCardSection";
import {PortfolioSection} from "./section/PortfolioSection";
import {UiSection} from "./section/UiSection";

import { useReducer } from "react";
import React from "react";

export const UiDispatch = React.createContext(null)

function uiReducer(state, action) {
  switch (action.type) {
    case "TOAST_APPEND":
      return {
        ...state,
        toastMessage: state.toastMessage.concat({
          ...action.toast,
          id: state.toastId,
        }),
        toastId: state.toastId + 1
      }
    case "TOAST_REMOVE":
      return {
        ...state,
        toastMessage: state.toastMessage.filter(i =>
          i.id !== action.toastId
        )
      }
  }
}

function App() {
  const [uiState, uiDispatch] = useReducer(uiReducer, {
    toastMessage: [], toastId: 0
  })

  return (
    <div className="App">
      <UiDispatch.Provider value={uiDispatch}>
        <FirstSection/>
        <BusinessCardSection/>
        <PortfolioSection/>
        <UiSection toastMessage={uiState.toastMessage}/>
      </UiDispatch.Provider>
    </div>
  );
}

export default App;
