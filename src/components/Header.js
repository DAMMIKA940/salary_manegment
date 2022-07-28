import React from "react";
import { Navbar,Nav,Container,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
<nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="/dashboard" style={{padding:'10px'}}>
   
    <b>Hasthiya IT</b>
  </a>
</nav>
    </div>
  );
};

export default Header;