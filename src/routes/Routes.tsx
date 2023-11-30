import { BrowserRouter, Routes, Route } from "react-router-dom-v6";
import DashboardRoute from "../page/dashboardRoute";
import SitesRoute from "../page/SitesRoute";
import CustomersRoute from "../page/CustomersRoute";
import UsersRoute from "../page/UsersRoute";
import Login from "../component/Login/Login";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardRoute />} />
      <Route path="/sites" element={<SitesRoute />} />
      <Route path="/customer" element={<CustomersRoute />} />
      <Route path="/users" element={<UsersRoute />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
