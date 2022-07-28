import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";
import Dashboard from "./Dashboard";
import './Users.css'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const Users = () => {

    const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get("http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/getAllUser")

    .then((res) => {
      console.log("Getting from:", res.data);
      setData(res.data.data);
    })

    .catch((err) => console.log(err));
}, []);

const deleteUser = (id) => {
  axios
    .delete(`http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/deleteUserById/${id}`)
    .then((res) => {
      console.log(res);
      setData(data.filter((user) => user.id !== id));
    }
    )
    .catch((err) => console.log(err));
}





const arr = data.map((data, index) => {
    return (
      <tr style={{ color: "#848e8a" }} key={index}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>
          <img src={data.profilePicture} width="40px" height="40px" className="image"></img>
        </td>
        <td>{data.email}</td>
        <td>{data.cumpus}</td>
        <td>{data.address}</td>
        <td>{data.salary}</td>
        <td>{data.AccNumber}</td>
        <td>

        <button class="button" onClick={() => deleteUser(data.id)}>Delete</button>

        </td>
        <td>

        <Link to={`/${data.id}`}>
              <button class="button">EDIT</button>
            </Link>
</td>
      </tr>
    );
  });


  return (
    <div>
        <Dashboard/>
        <div className="table">
     
        <table>
        <thead>
          <tr>

            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>University</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Acc.No:</th>
            <th>Action</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>{arr}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Users