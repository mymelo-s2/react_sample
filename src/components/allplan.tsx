import "../css/styles.css";
import "../css/table.css";
import Data from "../json/plan.json";
import { useOutletContext } from "react-router-dom";

export default function AllPlan() {
  const { userName } = useOutletContext<{ userName: string }>();

  const result = Data.filter((data: any) => data.name === userName);
  const dateTd: any[] = [];
  const planTd: any[] = [];
  const index: any[] = [];

  const dateFix = (date: string) => {
    let fixDate =
      date.slice(0, 4) + "/" + date.slice(4, 6) + "/" + date.slice(6);
    return fixDate;
  };

  for (let i = 0; i < Object.keys(result[0].plan).length; i++) {
    let key = Object.keys(result[0].plan)[i];
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

  return (
    <div className="AllPlan">
      <h2>
        <p>全期間の{userName}さんの予定</p>
      </h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div>
    </div>
  );
}
