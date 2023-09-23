import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="ui teal three item inverted menu">
            <Link to='/' className="item">
                Home
            </Link>
            <Link to='/AddTask' className="item">
                Add Task
            </Link>
            <Link to='/WeekTask' className="item">
                Week Task
            </Link>
        </div>
    )
};

export default Navbar;