import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import "./AddPayment.css";
import axios from "axios";
import Select from "react-select";
import { useParams } from "react-router-dom";

const AddPayment = () => {


  const [data, setData] = useState([]);
  const [userdata,setUserData] = useState([]);
  const [user_id, setId] = useState(""); // id of the user
  const [month,setmonth] = useState(""); // amount to be paid
  const [paid_amount,setpaid_amount] = useState(""); // amount to be paid
  const [rem_amount,setrem_amount] = useState(""); // amount to be paid

const [arr,setArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/getAllUser")

      .then((res) => {
        setData(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

 

  useEffect((id) => {
console.log("user_id",user_id);
      axios.get(`http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/getUserById/${user_id}`)
          .then(res => {
              setUserData(res.data.data[0]);
              console.log('data',res.data.data[0]);
              console.log('data m');
          }
          )
          .catch(err => {
              console.log(err);
          }
          )
 

  }, [user_id]);

  //userdata convert to array
  
console.log("userdata",userdata.salary);

 

const changeOnClick = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  axios.post("http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/payment/addPayment", {
    user_id: user_id,
    month: month,
    paid_amount: paid_amount,
    rem_amount: rem_amount,
  })
    .then((res) => {
      console.log(res.data);
     
      setId("");
      setmonth("");
      setpaid_amount("");
      setrem_amount("");
     
    }
    )
    window.alert("Payment added successfully")
  
    .catch((err) => console.log(err));

  


  
}


  return (
    <div>
      <Dashboard />

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <form action="" method="post" onSubmit={changeOnClick}>
                  <div className="row align-items-center pt-2 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Select user</h6>
                      </div>
                      <div className="col-md-6 pe-5">
                      <select
                        className="form-control"
                        id="exampleSelectGender"
                        name="id"
                        value={data.id}
                        onChange={(e) => setId(e.target.value)}
                        required={true}
                      >
                        <option value="0">Select a Name</option>
                        {data.map(function (user, i) {
                          return (
                            <option key={i} value={user.id}>
                             {user.name} - {user.email} 
                            </option>
                          );
                        })}
                      </select>
                      <img src={userdata.profilePicture ? userdata.profilePicture :'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=' } alt="user" className="img-fluid" />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-2 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">paid amount</h6>
                    </div>
                    <div className="col-md-6 pe-5">
                      <input
                        type="number"
                        className="form-control "
                        name="paid_amount"
                        id="paid_amount"
                        placeholder={userdata.salary}
                        value={paid_amount}
                        onChange={(e) => setpaid_amount(e.target.value)}
                        required={true}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-2 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Remaning amount</h6>
                    </div>
                    <div className="col-md-6 pe-5">
                      <input
                        type="number"
                        className="form-control"
                        name="rem_amount"
                        id="rem_amount"
                        //placeholder add default value
                     
                        placeholder={userdata.salary ? userdata.salary-paid_amount : "0"}
                        value={rem_amount}
                        onChange={(e) => setrem_amount(e.target.value)}
                        required={true}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-2">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Month</h6>
                    </div>
                    <div className="col-md-6 pe-5">
                      <input type="date"
                        
                        className="form-control"
                       
                        name="month"
                        id="month"
                        value={month}
                        onChange={(e) => setmonth(e.target.value)}
                        required={true}

                      />
     
                    </div>
                  </div>
                  <div className="btn">
                    <button type="submit" className="btn btn-danger">
                      Add Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
