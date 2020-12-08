import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>IRE <div className="imglogo"></div></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/about' className='nav-links'onClick={closeMobileMenu}>About</Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>Experience</Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact Me</Link>
          </li>
          
        </ul>
      
      </nav>
    </>
  );
}

export default Navbar;