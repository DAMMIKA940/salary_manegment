import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditUser.css";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
const EditUser = () => {
    const { id } = useParams();
    const userId = id;
  const navigate = useNavigate();




  const onChangeFile = (e) => {
   
    setUser({ ...user, image: e.target.files[0] });
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    cumpus: "",
    branch: "",
    bankName: "",
    AccNumber: "",
    githubid: "",
    slackid: "",
    trelloid: "",
    cumpusregnumber: "",
    address: "",
    birthday: "",
    image: "",
    internperiod: "",
    joindate: "",
    salary: "",
    speacialnote: "",

 
  });


  const updateUser = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("cumpus", user.cumpus);
    formData.append("branch", user.branch);
    formData.append("bankName", user.bankName);
    formData.append("AccNumber", user.AccNumber);
    formData.append("githubid", user.githubid);
    formData.append("slackid", user.slackid);
    formData.append("trelloid", user.trelloid);
    formData.append("cumpusregnumber", user.cumpusregnumber);
    formData.append("address", user.address);
    formData.append("birthday", user.birthday);
    formData.append("image", user.image);
    formData.append("internperiod", user.internperiod);
    formData.append("joindate", user.joindate);
    formData.append("salary", user.salary);
    formData.append("speacialnote", user.speacialnote);

    console.log("formdata", formData);
    axios.put(`http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/updateUser/${userId}`, formData).then((res) => {
      console.log(res);
 
    });

    window.alert("Registration Successful");

    navigate("/userlist").catch((error) => {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
      } else {
        console.log(error);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    }

useEffect(() => {
    axios.get(`http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/getUserById/${userId}`).then((res) => {
        if (res.data.data) {
            const userDetails = res.data.data[0];
            setUser({
              ...user,
              name: userDetails.name,
                email: userDetails.email,
                cumpus: userDetails.cumpus,
                branch: userDetails.branch,
                bankName: userDetails.bankName,
                AccNumber: userDetails.AccNumber,
                githubid: userDetails.githubid,
                slackid: userDetails.slackid,
                trelloid: userDetails.trelloid,
                cumpusregnumber: userDetails.cumpusregnumber,
                address: userDetails.address,
                birthday: userDetails.birthday,
                image: userDetails.image,
                internperiod: userDetails.internperiod,
                joindate: userDetails.joindate,
                salary: userDetails.salary,
                speacialnote: userDetails.speacialnote,
            });
        }
    }
    );
}, []);


  return (
    <div>
      <Dashboard />
      <ScrollToTop />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <form action="" method="post" onSubmit={updateUser}>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Full name</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Campus</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="cumpus"
                        id="cumpus"
                        value={user.cumpus}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Campus Reg Number</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="cumpusregnumber"
                        id="cumpusregnumber"
                        value={user.cumpusregnumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="address"
                        id="address"
                        value={user.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">BirthDay</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="birthday"
                        id="birthday"
                        value={user.birthday}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Bank Name</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="bankName"
                        id="bankName"
                        value={user.bankName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Branch</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="branch"
                        id="branch"
                        value={user.branch}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Account Number</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="AccNumber"
                        id="AccNumber"
                        value={user.AccNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Salary</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="salary"
                        id="salary"
                        value={user.salary}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Join Date</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="joindate"
                        id="joindate"
                        value={user.joindate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Github Id</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="githubid"
                        id="githubid"
                        value={user.githubid}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Slack Id</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="slackid"
                        id="slackid"
                        value={user.slackid}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Trello Id</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="trelloid"
                        id="trelloid"
                        value={user.trelloid}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Intern Period</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="internperiod"
                        id="internperiod"
                        value={user.internperiod}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Special Note</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea
                        className="form-control"
                        rows="3"
                        name="speacialnote"
                        id="speacialnote"
                        value={user.speacialnote}
                        onChange={handleChange}
                        placeholder="special note here...."
                      ></textarea>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Profile Picture</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        className="form-control form-control-lg"
                        filename="profilePicture"
                        onChange={onChangeFile}
                        type="file"
                      />
                      <div className="small text-muted mt-2">
                        Upload file. Max file size 50 MB
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Details
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

export default EditUser;
