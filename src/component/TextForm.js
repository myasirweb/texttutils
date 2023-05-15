import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("Enter Text to the");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("converter to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    // props.showAlert("converter to lowercase", "success");
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
    // props.showAlert("text cleard", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // props.showAlert("copied to Clipboard", "success");
  };

  // const handleExtraSpace = () => {
  //   let newText = text.split(/[ ]+/);
  //   setText(newText.join(""))
  // }

  return (
    <>
      <div
        className="conatiner"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-dark mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-2" onClick={handleCopy}>
          Copy text
        </button>
        {/* <button className="btn btn-dark mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> */}
        <button className="btn btn-danger mx-2" onClick={handleclearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Text Summary</h1>

        {/* <p>{text.split(" ").length} word And {text.length} Character</p> count 1 with 0 character bug */}

        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>

        <p>{0.008 * text.split(" ").length} Minute read</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
