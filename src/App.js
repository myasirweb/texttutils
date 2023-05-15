import React, { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import Alert from "./component/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Alert alert={alert} /> */}
      {/* <TextForm showAlert={showAlert} heading="WriteText" mode={mode} />  */}
      {/* <Navbar
        title="TextUtils"
        aboutText="AboutUS"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Write Text" mode={mode} />
        <About />
      </div> */}

      <Router>
        <Navbar
          title="TextUtils"
          aboutText="AboutUS"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={<TextForm heading="Write Text" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
