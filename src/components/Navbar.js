import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
     return (
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"style={{color:"white"}}>Habit Tracker</Link>
          
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/"className="nav-link active"style={{color:"white"}} aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/AddTask" className="nav-link" style={{color:"white"}}>Add Task</Link>
              </li>
              <li className="nav-item">
                <Link to="/WeekTask" className="nav-link" style={{color:"white"}}>Week Task</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
     );
};

export default Navbar;
