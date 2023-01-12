import "../css/styles.css";
import React, { useState } from "react";

export default function Password() {
  const [inputPassword, setInputPasswordElement] = useState("");
  const [text, setText] = useState("");
  const printText = () => {
    if (inputPassword !== "") {
      setText("");
      setText(inputPassword);
      setInputPasswordElement("");
    } else {
      setText("");
    }
  };
  return (
    <div className="Password">
      <h2>sample3 Password</h2>
      <div>
        入力
        <input
          value={inputPassword}
          onChange={(e) => setInputPasswordElement(e.target.value)}
          type="password"
          placeholder="入力してボタンを押してください。"
          className="textbox"
        />
        <button onClick={printText}>click</button>
      </div>
      <div>出力 : {text}</div>
    </div>
  );
}
