import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="navbar-container">
           <div className="navbar-logo"></div>
           <div className="navbar-links">
              <div className="navbar-link"><Link to='/' >Главная</Link></div>
              <div className="navbar-link"><Link to='dashboard'>Домой</Link></div>
              <div className="navbar-link"> Очистить</div>
           </div>
        </div>
     </div>
     
    );
}

export default Navbar;
