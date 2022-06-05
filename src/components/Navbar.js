import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const windowLocation = window.location;

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                WELCOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                MENU
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>

            <li className='navbar-logo'>
              <img alt = "Logo" onClick = {function e(){ return window.location = windowLocation }} src = '/images/transparentlogo_small.png'/>
            </li>
            
            <li className='nav-item'>
              <Link
                activeClass="active"
                to="followus"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                FOLLOW US
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass="active"
                to="location"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                LOCATION
              </Link>
            </li>
            <li className='nav-item'>
            <a                 
                className='nav-links' 
                onClick={closeMobileMenu}
                target='_blank'
                rel="noopener noreferrer"
                href="https://www.foodora.se/restaurant/zzg9/mo-mo-cha">FOODORA</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
