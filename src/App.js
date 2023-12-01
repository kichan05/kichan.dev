import "./style/font_s_core.css"
import './style/App.css';
import { FirstSection } from "./component/FirstSection";
import { BusinessCardSection } from "./component/BusinessCardSection";


function App() {
  return (
    <div className="App">
      <FirstSection/>
      <BusinessCardSection/>
    </div>
  );
}

export default App;
