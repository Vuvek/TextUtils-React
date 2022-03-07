import React, { useState } from "react";

// import PropTypes from 'prop-types';

export default function Tex(props) {

  

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    props.showAlert("Text Converted To UpperCase Successfully", "info");
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");

    setText(event.target.value);
  };
  const handleLowClick = () => {
    console.log("Lower Case was clicked" + text);
    let newText = text.toLowerCase();
    props.showAlert("Text Converted To LowerCase Successfully", "info");
    setText(newText);
  };
  const handleClearwClick = () => {
    console.log("Text Cleared" + text);
    let newText = "";
    props.showAlert("Text Cleared Successfully", "info");
    setText(newText);
  };
  const handleCopy = () => {
    console.log("I am copy" + text);
    var text = document.getElementById("myBox");
    // text.select();
    props.showAlert("Text Copied Successfully", "info");
    window.navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    props.showAlert("Extra Spaces Removed Successfully", "info");
    setText(newText.join(" "));
  };
  const handleFirstLetterCapital = () => {
    // console.log(buttonText.target.value);
    console.log(buttonText);
    if (buttonText == "Capital First") {
      let Array = text.split(/\s+/);
      let newText = Array.map(function (num) {
        return num.slice(0, 1).toUpperCase() + num.slice(1);
      });
      setbuttonText("Formal Text");
      props.showAlert("All Words are Capitalized Successfully", "info");
      setText(newText.join(" "));
    } else {
      let Array = text.split(". ");
      console.log(Array);
      let newText = Array.map(function (num) {
        return num.slice(0, 1).toUpperCase() + num.slice(1).toLowerCase();
      });
      setbuttonText("Capital First");
      props.showAlert("Text Converted To Standard Format Successfully", "info");
      setText(newText.join(". "));
    }
  };

  const [text, setText] = useState("Enter The Text Here");
  const [buttonText, setbuttonText] = useState("Capital First");
  return (
    <>
      <div className={`mx-5`}>
        <div>
          {/* <marquee behavior="alternate" direction="right"> */}
          <h1
            className={`my-4 shadow-sm p-3 bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"} rounded `}
          >
            {props.heading}
          </h1>
          {/* </marquee> */}
          <div className="mb-3">
            <textarea
              className={`form-control bg-${
                props.mode === "light" ? "light" : "dark"
              } text-${props.mode === "light" ? "dark" : "light"} rounded`}
              onChange={handleOnChange}
              id="myBox"
              rows="16"
              value={text}
            ></textarea>
          </div>
          <div className="w-100 d-flex flex-wrap" style={{justifyContent:'center',alignItems:'center'}}>
          
              <button disabled = {text.length===0}
                style={{ width: "100px",flex:1,height:'100px' }}
                className={`btn btn-${
                  props.mode === "light" ? "secondary" : "dark"
                } mx-1 my-2 fs-5 fw-bold`}
                onClick={handleUpClick}
                
              >
                Click To Upper
              </button>
              <button disabled = {text.length===0}
                style={{ width: "100px",flex:1,height:'100px' }}
                className={`btn btn-${
                  props.mode === "light" ? "secondary" : "dark"
                } mx-1 my-2 fs-5 fw-bold`}
                onClick={handleLowClick}
              >
                Click To Lower
              </button>
              <button disabled = {text.length===0}
                style={{ width: "100px",flex:1,height:'100px' }}
                className={`btn btn-${
                  props.mode === "light" ? "secondary" : "dark"
                } mx-1 my-2 fs-5 fw-bold`}
                onClick={handleClearwClick}
              >
                Clear Text
              </button>
              <button disabled = {text.length===0}
                style={{ width: "100px",flex:1,height:'100px' }}
                className={`btn btn-${
                  props.mode === "light" ? "secondary" : "dark"
                } mx-1 my-2 fs-5 fw-bold`}
                onClick={handleCopy}
              >
                Copy Text
              </button>
              <button disabled = {text.length===0}
                style={{ width: "100px",flex:1,height:'100px' }}
                className={`btn btn-${
                  props.mode === "light" ? "secondary" : "dark"
                } mx-1 my-2 fs-5 fw-bold oval`}
                onClick={handleExtraSpaces}
              >
                Extra Spaces
              </button>
              <button disabled = {text.length===0}
                style={{ width: "100px",flex:1,height:'100px' }}
                className={`btn btn-${
                  props.mode === "light" ? "secondary" : "dark"
                } mx-1 my-2 fs-5 fw-bold`}
                onClick={handleFirstLetterCapital}
              >
                {buttonText}
              </button>
          </div>
        </div>
      </div>
      <div style={{minHeight:'350px'}}
        className={`my-1 mx-5 bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h1
          className={`shadow-sm p-3 mt-5 bg-${
            props.mode === "light" ? "light" : "dark"
          } rounded text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Your Text Summary
        </h1>
        <ul className="mx-5">
          <li>
            <p className="fs-4">
              {
                text.split(/\s+/).filter((num) => {
                  if (num != "") {
                    return num;
                  }
                }).length
              }{" "}
              words and {text.length} characters
            </p>
          </li>
          <li>
            <p className="fs-4">
              {(
                text.split(/\s+/).filter((num) => {
                  if (num != "") {
                    return num;
                  }
                }).length * 0.008
              ).toFixed(2)}{" "}
              Minutes To Read
            </p>
          </li>
        </ul>
        <h1
          className={`shadow-sm p-3 mb-5rounded bg-${
            props.mode === "light" ? "light" : "dark"
          } text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Preview
        </h1>
        <p className="fs-6 bg-${props.mode === 'light'? 'light':'dark'} text-${props.mode === 'light'? 'dark':'light'} mx-5">
          {text.length === 0?"Enter The Text To Preview":text}
        </p>
      </div>
    </>
  );
}
