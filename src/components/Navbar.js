import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">New Chat</a>
      <div >
      <a href='#home' className='aboutus'>AboutUs</a>
    </div>
    </div>
  );
};

export default Navbar;
