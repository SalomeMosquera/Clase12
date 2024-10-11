import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.jsx";
import "./App.css";
import Calculadora from "./componentes/Calculadora.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={appLogo}
            className="logo"
            alt="proyect-pwa-proptypes logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>proyect-pwa-proptypes</h1>
      <div className="card">
        <Calculadora />
      </div>
      <PWABadge />
    </>
  );
}

export default App;
