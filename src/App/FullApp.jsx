import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppSetup from "./AppSetup";
import DefaultDashboard from "../pages/defaultDashBoard/DefaultDashboard";
import OrderTable from "../pages/orderList/OrderList";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const FullApp = () => {
  return (
    <Router>
      <AppSetup>
        <Routes>
            <Route path="/Assignment-UI" element={<Navigate to="/Assignment-UI/Dashboards/Default" />} />

          {/* Add more routes for other dashboards */}
          <Route
            path="/Assignment-UI/Dashboards/Default"
            element={<DefaultDashboard />}
          />
          <Route path="/Assignment-UI/Dashboards/Order-List" element={<OrderTable />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppSetup>
    </Router>
  );
};

export default FullApp;
