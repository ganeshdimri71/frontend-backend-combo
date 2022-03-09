import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Customers from "./components/Customers/Customers";
import CustomerUpdate from "./components/Customers/CustomerUpdate";
import Dashboard from "./Dashboard";
import Login from "./Login";
import CustomerCreate from "./components/Customers/CustomerCreate";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/myapps" element={<Navigate replace to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="customer" element={<Customers />} />
          <Route path=":id" element={<CustomerUpdate />} />
          <Route path="add" element={<CustomerCreate />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
