import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
        <div className='navbar'>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><Link to ='/home' className='nav'>Home</Link></li>
                        <li><Link to ='/trainDetails' className='nav'>Train Details</Link></li>
                        <li><Link to ='/contact' className='nav'>Contact Us</Link></li>
                        <li><Link to ='/login' className='nav'>Log In</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  );
};


export default Menu;
