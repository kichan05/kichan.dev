import "./style/font_s_core.css"
import "./style/font_pretendard.css"
import './style/App.css';
import { FirstSection } from "./component/FirstSection";
import { BusinessCardSection } from "./component/BusinessCardSection";
import { PortfolioSection } from "./component/PortfolioSection";


function App() {
  return (
    <div className="App">
      <FirstSection/>
      <BusinessCardSection/>
      <PortfolioSection/>
    </div>
  );
}

export default App;
