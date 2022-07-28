import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Header from "./Header";

const Dashboard = () => {

  const logouthandler = () => {
    localStorage.clear("authToken");
    window.location.reload();
  }
  
  return (
    <div>
      <Header />
      <div class="sidebar">
        <div class="logo-details">
          <img
            src="data:image/jpeg;base64,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"
            width="60"
            height="50"
            style={{ marginLeft: "80px" }}
            className="d-inline-block align-top"
            alt=""
          />
        </div>
        <ul class="nav-links">
          <li>
            <Link to="/birthday" >
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">BirthDays</span>
            </Link>
          </li>
          <li>
            <Link to="/userlist">
              <i class="bx bx-box"></i>
              <span class="links_name">userlist</span>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <i class="bx bx-list-ul"></i>
              <span class="links_name">Add User</span>
            </Link>
          </li>
          <li>
            <Link to="/payment">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Add Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/paymentDetails">
              <i class="bx bx-coin-stack"></i>
              <span class="links_name">Payment Details</span>
            </Link>
          </li>
       
          <li>
          <a href="/">
              <i class="bx bx-log-out"></i>
              <span class="links_name" onClick={logouthandler}>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section"></section>
    </div>
  );
};

export default Dashboard;
