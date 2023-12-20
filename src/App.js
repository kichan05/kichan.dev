import "./style/font_s_core.css"
import "./style/font_pretendard.css"
import './style/App.css';
import {UiSection} from "./section/UiSection";

import React, {useEffect, useReducer} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {MainPage} from "./page/MainPage";
import {PortfolioPage} from "./page/PortfolioPage";
import ScrollToTop from "./component/ScrollToTop";

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

const Test = () => {
  return (
    <h1>Hello Test</h1>
  )
}

function App() {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [uiState, uiDispatch] = useReducer(uiReducer, {
    toastMessage: [], toastId: 0
  })

  return (
    <div className="App">
      <UiDispatch.Provider value={uiDispatch}>
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route index element={<MainPage/>}/>
            <Route path={"/portfolio/:portfolilId"} element={<PortfolioPage/>}/>
            <Route path={"/kichan.dev"} element={<Test/>}/>
          </Routes>
        </BrowserRouter>
        <UiSection toastMessage={uiState.toastMessage}/>
      </UiDispatch.Provider>
    </div>
  );
}

export default App;
