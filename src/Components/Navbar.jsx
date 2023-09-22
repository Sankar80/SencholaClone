import React,{useState} from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
import { CDBBtn, CDBContainer } from "cdbreact";

const Navbar = () => {

    const[menuOpen,setMenuOpen] = useState(false);

  return (
    <nav className='container-fluid'>
         {/* <Link to="/" className='title-logo'><img src={LOGO} alt="" /></Link> */} 
         <Link to="/" className='title'>Senchola University.</Link> 
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/whysenchola">Why Senchola</NavLink>
            </li>
            <li>
                <NavLink to="/form">Form</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/login">
                  <CDBBtn color="seconadry" className='px-4 university-navbar-login' size="medium" circle outline style={{marginTop:'-5px'}}>
                    <b>Login</b> 
                  </CDBBtn>
                </NavLink>
            </li>
            <li>
                <NavLink to="/signup">
                  <CDBBtn color="success" className='px-4 university-navbar-signup' size="large" circle style={{marginTop:'-7px',backgroundColor:"green"}}>
                    sign up
                  </CDBBtn>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar