import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "../src/components/Home";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import Lecture from "./components/Lecture";

function App() {
  const [component, setCompenent] = useState(<Home/>);

  function setMenu(menu) {
    switch (menu) {
      case "home": {
        setCompenent(<Home />);
        break;
      }
      case "lecture": {
        setCompenent(<Lecture />);
        break;
      }
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={reactLogo} alt="" />
          </a>
          <span>ICET Engineering</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item btn">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    setMenu("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item btn">
                <a
                  className="nav-link"
                  onClick={() => {
                    setMenu("lecture");
                  }}
                >
                  Lectures
                </a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {component}

    </div>
  );
}

export default App;
