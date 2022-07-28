import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";
import Dashboard from "./Dashboard";
import "./Users.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Birthday = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8000/user/getTodayBirthday")
  
        .then((res) => {
          console.log("Getting from:", res.data);
          setData(res.data.data);
        })
  
        .catch((err) => console.log(err));
    }, []);

    const arr = data.map((data, index) => {
        return (
          <tr style={{ color: "#848e8a" }} key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.cumpus}</td>
            <td>{data.address}</td>
            <td>{data.birthday}</td>
            <td>
              <img
                src={data.profilePicture}
                width="40px"
                height="40px"
                className="image"
              ></img>
            </td>
          </tr>
        );
      });

  return (
    <div>
      <Dashboard />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>University</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{arr}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Birthday