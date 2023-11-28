import './App.css';
import edcanLogo from "./edcan.svg"
import edcanTypo from "./edcan_typo.svg"
import {useState} from "react";


function App() {
  const [isReverse, setIsReverse] = useState(false)

  return (
    <div className="App">
      <section className="page1">
        <div className={`business-card-wrap ${isReverse ? 'reverse' : ''}`}
           onMouseMove={() => {setIsReverse(true)}}
           onMouseOut={() => {setIsReverse(false)}}
        >
          <div className="front">
            <div className="edcan-logo-wrap">
              {isReverse}
              <img src={edcanLogo}/>
            </div>
            <div className="name-wrap">
              <h2>박희찬</h2>
              <h3>Developer</h3>
            </div>
            <div className="content-wrap">
              <div className="tel-wrap">
                <div className="tel-title title">TEL</div>
                <div className="tel-content content">010-0000-0000</div>
              </div>
              <div className="mail-wrap">
                <div className="mail-title title">MAIL</div>
                <div className="mail-content content">ckstmznf@naver.com</div>
              </div>
              <div className="link-wrap">
                <div className="link-title title">GITHUB</div>
                <div className="link-content content">github.com/kichan05</div>
              </div>
            </div>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="bottom">
              <img src={edcanTypo} alt=""/>
            </div>

            <div className="circle"></div>
          </div>
          <div className="back">
            <img src={edcanTypo}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
