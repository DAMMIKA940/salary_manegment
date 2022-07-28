import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Birthday.css";
import Dashboard from "./Dashboard";
const BirthDay = () => {
  //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const newDate = new Date();
  const date1 = newDate.getDate();
  const month = newDate.getMonth() + 1;

  const date = month > 10 ? month : "0" + month + "-" + date1;

  console.log("date", date);
  const convertDate = (date) => {
    return String(date).replace("/", "-").slice(5, 10);
  };

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

  return (
    <div>
      <Dashboard />
      <h1 style={{ marginLeft: "650px", marginTop: "20px" }}>Birthday</h1>
      <div className="person-list">
        <div
          className="card"
          style={{ backgroundColor: "#B1F30E", width: "30%" }}
        >
          {data.map((contact) => {
            const { id, name, birthday, empNumber, profilePicture } = contact;

            if (convertDate(birthday) === String(date)) {
              return (
                <article key={id} className="person">
                  <div
                    className="card"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#A23590",
                      width: "30%",
                    }}
                  >
                    <img src={profilePicture} alt={name} className="image" />
                  </div>
                  <div>
                    <h4 style={{ color: "blue" }}>{name}</h4>
                    <p>{birthday}</p>
                    <p>{empNumber}</p>
                    <h5 style={{ color: "green" }}>Happy BirthDay </h5>
                    <b style={{ color: "red" }}>*********************</b>
                    <hr />
                  </div>
                </article>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BirthDay;
