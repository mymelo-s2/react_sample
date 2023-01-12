import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import SampleList from "./components/samplelist";
import Textbox from "./components/textbox";
import Date from "./components/date";
import Password from "./components/password";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/samplelist" element={<SampleList />} />
          <Route
            path="/textbox"
            element={<Textbox testMessage="testMessageです" />}
          />
          <Route path="/date" element={<Date />} />
          <Route path="/password" element={<Password />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
