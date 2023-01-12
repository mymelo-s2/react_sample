import "../css/styles.css";
import React, { useState, VFC } from "react";

type Props = {
  testMessage: string;
};

export default function Textbox(props: VFC<Props>) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("");
  const { testMessage } = props;
  const printText = () => {
    if (inputText !== "") {
      setText("");
      setText(inputText);
      setInputElement("");
    } else {
      setText("");
    }
  };
  return (
    <div className="Textbox">
      <h2>sample1 textbox</h2>
      <div>{testMessage}</div>
      <div>
        入力
        <input
          value={inputText}
          onChange={(e) => setInputElement(e.target.value)}
          type="text"
          placeholder="入力してボタンを押してください。"
          className="textbox"
        />
        <button onClick={printText}>click</button>
      </div>
      <div>出力 : {text}</div>
    </div>
  );
}
