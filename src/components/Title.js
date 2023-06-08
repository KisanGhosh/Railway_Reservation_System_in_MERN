import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className='title'>
          <div className='navbar'>  
            <div className='navbar-logo'>
                <h1><span>RAIL</span>-GARI</h1>
            </div>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><Link to ='/register' className='nav'>Register</Link></li>
                        <li><Link to ='/login' className='nav'>Log In</Link></li>
                    </ul>
                </nav>
            </div>
          </div>    
    </div>
  );
};

export default Title;
