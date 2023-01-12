import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import ThisMonthPlan from "./components/thismonthplan";
import AllPlan from "./components/allplan";
import SelectDatePlan from "./components/selectdateplan";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/thismonthplan" element={<ThisMonthPlan />} />
          <Route path="/allplan" element={<AllPlan />} />
          <Route path="/selectdateplan" element={<SelectDatePlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
