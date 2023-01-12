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
        React TypeScript Sample
        <p className="username">user : {userName.userName}</p>
        <p className="logout">
          <input type="button" value="logout" onClick={() => logout()} />
        </p>
      </div>
      <div className="main_menu">
        <div className="sidebar">
          <div>
            <Link to="/samplelist" className="menu">
              Sample List
            </Link>
          </div>
          <div>
            <Link to="/textbox" className="menu">
              sample1
            </Link>
          </div>
          <div>
            <Link to="/date" className="menu">
              sample2
            </Link>
          </div>
          <div>
            <Link to="/password" className="menu">
              sample3
            </Link>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default Main;
