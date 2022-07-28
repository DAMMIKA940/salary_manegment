import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 const [cumpus,  setCumpus] = useState("");
  const [branch, setBranch] = useState("");
  const [bankName,setBankName] = useState("");
  const [AccNumber,setAccNumber] = useState("");
  const [githubid,setgithubid] = useState("");
  const [slackid,setSlackid] = useState("");
  const [trelloid,setTrelloid] = useState("");
   const [cumpusregnumber,setCumpusregnumber]= useState("");
   const [address,setAddress]= useState("");
   const [birthday,setBirthDay]= useState("");
    const [image,setProfilePicture]= useState("");
    const [internperiod,setInternperiod]= useState("");
    const [joindate,setjoindate]= useState("");
    const [salary,setSalary]= useState("");
    const [speacialnote,setSpeacialnote]= useState("");
    const [ empNumber,setEmpNumber]= useState("");
    const [mobile ,setMobile]= useState("");
    const onChangeFile = (e) => {
      setProfilePicture(e.target.files[0]);
     
    };

    const changeOnClick = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
  
      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("cumpus", cumpus);
      formData.append("empNumber", empNumber);
      formData.append("branch", branch);
      formData.append("bankName", bankName);
      formData.append("AccNumber", AccNumber);
      formData.append("githubid", githubid);
      formData.append("slackid", slackid);
      formData.append("trelloid", trelloid);
      formData.append("cumpusregnumber", cumpusregnumber);
      formData.append("address", address);
      formData.append("birthday", birthday);
      formData.append("image", image);
      formData.append("internperiod", internperiod);
      formData.append("joindate", joindate);
      formData.append("salary", salary);
      formData.append("speacialnote", speacialnote);
    
     


  
  
      console.log("formdata", formData);
      axios
        .post("http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/user/addUser", formData)
        .then((res) => {
  
          console.log(res);
          setName("");
          setEmail("");
          setCumpus("");
          setBranch("");
          setBankName("");
          setAccNumber("");
          setgithubid("");
          setSlackid("");
          setTrelloid("");
          setCumpusregnumber("");
          setAddress("");
          setBirthDay("");
          setProfilePicture("");
          setInternperiod("");
          setjoindate("");
          setSalary("");
          setSpeacialnote("");
          setEmpNumber("");
          setMobile("");

       
        })
  
window.alert("Registration Successful")
  
    navigate("/dashboard")
  
    
        .catch((error) => {
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

  return (
    <div>
      <Dashboard />
      <ScrollToTop />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body">
              <form action="" method="post" onSubmit={changeOnClick}>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Employee Number</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="empNumber"
                      id="empNumber"
                      value={empNumber}
                      onChange={(e) => setEmpNumber(e.target.value)}
                      required={true}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>

                <hr className="mx-n3" />
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="mobile"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required={true}
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
                      value={cumpus}
                      onChange={(e) => setCumpus(e.target.value)}
                    
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
                      value={cumpusregnumber}
                      onChange={(e) => setCumpusregnumber(e.target.value)}
                  
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
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    
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
                      value={birthday}
                      onChange={(e) => setBirthDay(e.target.value)}
                      required={true}
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
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      required={true}
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
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      required={true}
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
                      value={AccNumber}
                      onChange={(e) => setAccNumber(e.target.value)}
                      required={true}
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
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                     
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
                      value={joindate}
                      onChange={(e) => setjoindate(e.target.value)}
                     
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
                      value={githubid}
                      onChange={(e) => setgithubid(e.target.value)}
                     
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
                      value={slackid}
                      onChange={(e) => setSlackid(e.target.value)}
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
                      value={trelloid}
                      onChange={(e) => setTrelloid(e.target.value)}
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
                      value={internperiod}
                      onChange={(e) => setInternperiod(e.target.value)}
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
                      value={speacialnote}
                      onChange={(e) => setSpeacialnote(e.target.value)}
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

export default Register;
