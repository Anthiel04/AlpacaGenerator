import { IonApp, setupIonicReact } from "@ionic/react";
import { useState } from "react";
import AlpacaJSON from "./components/Alpaca.json";
import LlamaButtonList from "./components/LlamaButtonList";
import LlamaParts from "./components/LlamaParts";
import { toPng } from "html-to-image";

import "./components/index.css";
import Llama from "./components/Llama";
setupIonicReact();
const Alpaca: any = AlpacaJSON;

const downloadAlpacaImg = () => {
  let box: any = document.querySelector(".AlpacaBox");
  box.style.borderRadius = "0px";
  let items = document.querySelectorAll(".part");
  items.forEach((element: any) => {
    element.style.borderRadius = "0px";
  });
  toPng(box, { cacheBust: true }).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "my-image-name.png";
    link.href = dataUrl;
    link.click();
    box.style.borderRadius = "35px";
    items.forEach((element: any) => {
      element.style.borderRadius = "35px";
    });
  });
};

const App: React.FC = function App() {
  const [mainState, setMainState]: any = useState({
    accesories: "none",
    backgrounds: "default",
    ears: "default",
    eyes: "default",
    hair: "default",
    leg: "none",
    mouth: "default",
    neck: "default",
  });

  const [view, setView] = useState("accesories");

  const changeView = (e: any) => {
    setView(e.target.value);
  };

  const changeState = (e: any) => {
    let img: string = e.target.style.backgroundImage;
    let evaluate: string = e.target.value;
    const updateMainState = (field: string, value: string) => {
      value.indexOf("none") !== -1 ? (value = "none") : (value = value);
      setMainState((prevState: any) => ({ ...prevState, [field]: value }));
    };
    updateMainState(evaluate, img);
  };
  return (
    <IonApp className="App">
      <header className="App-header">Alpaca Image generator</header>
      <div className="container column">
        <div className="AlpacaBox">
          <div id="nose" />
          <Llama state={mainState} />
        </div>
        <button className="button" onClick={downloadAlpacaImg}>
          <span className="button-content">Download </span>
        </button>
      </div>
      <section>
        <LlamaParts view={view} onClick={changeState} />
      </section>
      <footer>
        <LlamaButtonList onClick={changeView} />
      </footer>
    </IonApp>
  );
};

export default App;
