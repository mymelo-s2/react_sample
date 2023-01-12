import { memo, useState, VFC } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../css/main.css";

export const Main: VFC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserNameElement] = useState<{ userName: string }>(
    location.state as { userName: string }
  );
  const logout = () => {
    setUserNameElement({ userName: "" });
    navigate("/");
  };
  return (
    <div className="main">
      <div className="main_header" id="header">
        React Sample
        <p className="username">user : {userName.userName}</p>
        <p className="logout">
          <input type="button" value="logout" onClick={() => logout()} />
        </p>
      </div>
      <div className="main_menu">
        <div className="sidebar">
          <div>
            <Link to="/thismonthplan" className="menu">
              今月
            </Link>
          </div>
          <div>
            <Link to="/allplan" className="menu">
              全期間
            </Link>
          </div>
          <div>
            <Link to="/selectdateplan" className="menu">
              選択期間
            </Link>
          </div>
        </div>
        <div className="content">
          <Outlet context={{ userName: userName.userName }} />
        </div>
      </div>
    </div>
  );
});

export default Main;
