import React from "react";
import Dashboard from "./components/Dashboard";
import Headers from "./components/Header";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Users from "./components/Users";
import Register from "./components/Register";
import LoginScreen from "./components/LoginScreen";
import AddPayment from "./components/AddPayment";
import PaymentDetails from "./components/PaymentDetails";
import EditUser from "./components/EditUser";
import BirthDay from "./components/BirthDay";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />}/>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userlist" element={<Users />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/header" element={<Headers />}></Route>
          <Route path="/payment" element={<AddPayment />}></Route>
          <Route path="/paymentDetails" element={<PaymentDetails />} ></Route>
          <Route path="/birthday" element={<BirthDay />}></Route>
          <Route path=":id" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
