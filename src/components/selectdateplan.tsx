import "../css/table.css";
import "../css/styles.css";
import Data from "../json/plan.json";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectDatePlan() {
  const { userName } = useOutletContext<{ userName: string }>();
  const [inputDate1, setInputDateElement1] = useState("");
  const [inputDate2, setInputDateElement2] = useState("");
  const [text, setText] = useState("");
  const dateTd: any[] = [];
  const planTd: any[] = [];
  const index: any[] = [];
  const thisMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return year + " " + month;
  };
  const dateFix = (date: string) => {
    let fixDate =
      date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + date.slice(6);
    return fixDate;
  };
  const searchKey = () => {
    let date = thisMonth();
    if (date.length === 6) {
      date = date.replace(" ", "0");
    } else {
      date = date.replace(" ", "");
    }
    return "d" + date;
  };
  const printText = () => {
    const oldDate = inputDate1.replace(/-/g, "");
    const newDate = inputDate2.replace(/-/g, "");
    console.log(oldDate);

    const result = Data.filter((data: any) => data.name === userName);

    const selectDatePlans = Object.keys(result[0].plan).filter((e: any) =>
      e.startsWith(searchKey())
    );
    console.log(selectDatePlans);

    for (let i = 0; i < selectDatePlans.length; i++) {
      let key = selectDatePlans[i];
      let pushKey = key.replace("d", "");
      dateTd.push(dateFix(pushKey));
      planTd.push(result[0].plan[key]);
      index.push(i);
    }

    const tbody = index.map((index) => {
      return (
        <tr key={index}>
          <td>{dateTd[index]}</td>
          <td className="planTd">{planTd[index]}</td>
        </tr>
      );
    });

    if (inputDate1 !== "" && inputDate2 !== "" && newDate >= oldDate) {
      let outputDate = inputDate1.replace(/-/g, "/");
      setText(outputDate);
    } else {
      setInputDateElement1("");
      setInputDateElement2("");
    }
  };
  return (
    <div className="SelectDatePlan">
      <h2>
        <p>選択期間の{userName}さんの予定</p>
      </h2>
      <div className="flex">
        <p>期間</p>
        <input
          value={inputDate1}
          onChange={(e) => setInputDateElement1(e.target.value)}
          type="date"
          className="datebox"
        />
        <input
          value={inputDate2}
          onChange={(e) => setInputDateElement2(e.target.value)}
          type="date"
          className="datebox"
        />
        <button onClick={printText}>出力</button>
      </div>
      <div>出力 : {text}</div>
      {/* <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div> */}
    </div>
  );
}
