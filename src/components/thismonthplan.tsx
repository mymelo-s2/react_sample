import { useOutletContext } from "react-router-dom";
import "../css/styles.css";
import "../css/table.css";
import Data from "../json/plan.json";

export default function ThisMonthPlan() {
  const { userName } = useOutletContext<{ userName: string }>();
  const thisMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return year + " " + month;
  };

  const result = Data.filter((data: any) => data.name === userName);
  const dateTd: any[] = [];
  const planTd: any[] = [];
  const index: any[] = [];

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

  const thisMonthPlans = Object.keys(result[0].plan).filter((e: any) =>
    e.startsWith(searchKey())
  );

  for (let i = 0; i < thisMonthPlans.length; i++) {
    let key = thisMonthPlans[i];
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

  const view = thisMonth().replace(" ", "年");

  return (
    <div className="ThisMonthPlan">
      <h2>
        <p>
          {view}月の{userName}さんの予定
        </p>
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
