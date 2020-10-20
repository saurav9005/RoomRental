import React, { Component } from 'react';

import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOPen:false
    }
    handleToggle = () =>{
        this.setState({isOPen:!this.state.isOPen})
    }
    render() {
        return (
           <nav className="navbar">
               <div className="nav-center">
                   <div className="nav-header">
                       <Link to="/">
                           <img src={logo} alt="University Dorm Rooms"/>
                       </Link>
                       <button type="button" className="nav-btn" onClick={this.handleToggle} >
                            <FaAlignRight className="nav-icon"/>
                       </button>
                   </div>
                   <ul className={this.state.isOPen ? "nav-links show-nav" : "nav-links"}>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                       <li>
                           <Link to="/rooms">Rooms</Link>
                       </li>
                   </ul>
               </div>
           </nav>
        )
    }
}
