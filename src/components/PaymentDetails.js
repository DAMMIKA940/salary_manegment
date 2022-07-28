import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from './Dashboard'
import { Table } from "react-bootstrap";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
const PaymentDetails = () => {

    const [data, setData] = useState([]);



useEffect(() => {
  axios
    .get("http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/payment/getAllPayments")

    .then((res) => {
      console.log("Getting from:", res.data);
      setData(res.data.data);
    })

    .catch((err) => console.log(err));
}, []);

const onDelete = (id) => {
  console.log("id", id);
  axios
    .delete(`http://ec2-35-92-11-123.us-west-2.compute.amazonaws.com:8080/payment/deletePaymentById/${id}`)
    .then((res) => {
      console.log(res);
      setData(data.filter((user) => user.id !== id));
    }
    )
    .catch((err) => console.log(err));
}

if (data.length === 0) {
  return     <div><Dashboard/>
  <div className="table">
<Table striped bordered hover style={{ marginTop: '30px',marginLeft:'20%',width:'70%'
 }}>
  
  <thead className="thead-dark">
    <tr>
      <th>Id</th>
      <th>user id</th>
      <th>Name</th>
      <th>paid amount</th>
      <th>rem amount</th>
      <th>Month</th>
      <th>Action</th>
  
    </tr>
  </thead>
 
</Table>
</div>

</div>;
}

const arr = data.map((data, index) => {
    return (
      <tr style={{ color: "#848e8a" }} key={data.id}>
        <td>{data.id}</td>
        <td>{data.user_id}</td>
        <td>{data.name}</td>
        <td>{data.paid_amount}</td>
        <td>{data.rem_amount}</td>
        <td>{data.month}</td>
        <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
   
      </tr>
    );
  });

//setFontSize



  //print arr to pdf
  const print = () => {
   
    let doc = new jsPDF();
console.log("data", data[0].id);
    
    autoTable(doc, { html: '#my-table' })

    doc.save("Payment.pdf");
 
 
  
  }



  return (
    <div><Dashboard/>
        <div className="table">
      <Table striped bordered hover style={{ marginTop: '30px',marginLeft:'5%',width:'100%'
       }}>
        <table id="my-table">
        <thead className="thead-dark" >
          <tr>
            <th>Id</th>
            <th>user id</th>
            <th>Name</th>
            <th>paid amount</th>
            <th>rem amount</th>
            <th>Month</th>
            <th>Action</th>
        
          </tr>
        </thead>
        <tbody>{arr} </tbody>
        <button onClick={print}>Print</button>
        </table>
      </Table>
     
      </div>
     
    </div>
  )
}

export default PaymentDetails