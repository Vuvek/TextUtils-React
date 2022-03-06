
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      window.document.body.style.backgroundColor = "lightslategray";
      showAlert("Dark Mode Has Been Enabled", "info");
      document.title = "TextUtils | Dark Mode";
      setInterval(() => {
        document.title = "TextUtils | TextUtils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils | Install TextUtils";
      }, 1500);
    } else {
      setmode("light");
      window.document.body.style.backgroundColor = "#fff0ff";
      showAlert("Light Mode Has Been Enabled", "info");
      document.title = "TextUtils | Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} setalert={setalert} />
        <div className="container my-5">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                heading="Enter The Text To Analyze"
                mode={mode}
                toggleMode={toggleMode}
                alert={alert}
                showAlert={showAlert}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
