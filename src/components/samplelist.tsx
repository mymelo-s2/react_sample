import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import "../css/styles.css";
import Data from "../json/todo.json";

export default function SampleList() {
  const { userName } = useOutletContext<{ userName: string }>();
  const melo = userName;
  useEffect(() => {
    const userInfo = Data.filter((data: any) => {
      console.log(data.name);
      console.log(userName);
      return data.name === userName;
    });
    console.log(Data);
    console.log(userInfo[0].TODO);
  });
  return (
    <div className="SampleList">
      <h2>Sample</h2>
      <div>sample1: input Text & Props</div>
      <div>sample2: input Date</div>
      <div>sample3: input Password</div>
      <div>{userName}</div>
      <div>melo {melo}</div>
    </div>
  );
}
