import { useState } from "react";
import PWABadge from "./PWABadge.jsx";
import "./App.css";
import Calculadora from "./componentes/Calculadora.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a>
          <img />
        </a>
      </div>
      <h1 className="title">CALCULADORA</h1>
      <div className="card">
        <Calculadora />
      </div>
      <PWABadge />
    </>
  );
}

export default App;
