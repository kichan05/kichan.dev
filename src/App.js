import {GlobalStyle} from "./style/GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UiSection from "./section/UiSection";
import React, {useEffect} from "react";
import {UiContextProvider} from "./context/UiReducer";
import Page from "./page/Page";
import {PortfolioPage} from "./page/PortfolioPage";

const Test = styled.div`
  height: var(--footer-height);
  background-color: #f00;
`

function App() {
  useEffect(() => {
    let title = document.title
    document.addEventListener("visibilitychange", () => {
      if(document.visibilityState === "visible"){
        document.title = title
      }
      else {
        document.title = "돌아와줘요 🥲"
      }
    })
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <UiContextProvider>
          {/*<Page/>*/}
          <PortfolioPage/>
          <Footer/>
          <UiSection/>
        </UiContextProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;
