import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './logo1.png';
import { MdPeople } from "react-icons/md";
import { FaInbox } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="div">
          <nav className="nav">
            <div>
              <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="ul">
              <li><MdPeople className='one' /><a href="#">Student Management</a></li>
              <li><FaInbox className='one' /><a href="#">Financial Management</a></li>
              <li><RiDiscountPercentFill className='one' /><a href="#">Quality Control</a></li>
              <li><BsFillGrid1X2Fill className='one'/><a href="#">Report Delivery</a></li>
              <li><MdContactPage className='one' /><a href="#">Attendance Sheet</a></li>
            </ul>
            
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
