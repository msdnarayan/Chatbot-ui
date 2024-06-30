import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleNewChatClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.location.reload(); // Reload the page
  };

  return (
    <div className="navbar">
      <a href="#home" onClick={handleNewChatClick}>New Chat</a>
      <div>
        <a href="#home" className="aboutus">AboutUs</a>
      </div>
    </div>
  );
};

export default Navbar;
