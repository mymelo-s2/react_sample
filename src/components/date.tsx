import "../css/styles.css";
import React, { useState } from "react";

export default function Date() {
  const [inputDate, setInputDateElement] = useState("");
  const [text, setText] = useState("");
  const printText = () => {
    if (inputDate !== "") {
      setText("");
      let outputDate = inputDate.replace(/-/g, "/");
      setText(outputDate);
      setInputDateElement("");
    } else {
      setText("");
    }
  };
  return (
    <div className="Date">
      <h2>sample2 date</h2>
      <div>
        入力
        <input
          value={inputDate}
          onChange={(e) => setInputDateElement(e.target.value)}
          type="date"
          placeholder="入力してボタンを押してください。"
          className="textbox"
        />
        <button onClick={printText}>click</button>
      </div>
      <div>出力 : {text}</div>
    </div>
  );
}
