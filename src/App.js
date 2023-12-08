import "./style/font_s_core.css"
import "./style/font_pretendard.css"
import './style/App.css';

import {FirstSection} from "./component/FirstSection";
import {BusinessCardSection} from "./component/BusinessCardSection";
import {PortfolioSection} from "./component/PortfolioSection";
import {UiSection} from "./component/UiSection";

import {useReducer, useRef, useState} from "react";
import React from "react";

export const UiDispatch = React.createContext(null)

function uiReducer(state, action){
  switch (action.type) {
    case "TOAST_APPEND":
      return {
        ...state,
        toastMessage : state.toastMessage.concat({
          ...action.toast,
          id : state.toastId
        }),
        toastId : state.toastId + 1
      }
  }
}


function App() {
  const [uiState, dispatch] = useReducer(uiReducer, {
    toastMessage: [], toastId : 0
  })

  return (
    <div className="App">
      <UiDispatch.Provider value={dispatch}>
        <FirstSection/>
        <BusinessCardSection/>
        <PortfolioSection/>
        <UiSection toastMessage={uiState.toastMessage}/>
      </UiDispatch.Provider>
    </div>
  );
}

export default App;
