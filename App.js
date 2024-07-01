import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import AddCommentIcon from '@mui/icons-material/AddComment';



function Chat() {
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const addMessage = (message, sender) => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender, feedback: '' }]);
  };

  const addFeedback = (index, feedback) => {
    setMessages(prevMessages =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, feedback } : msg
      )
    );
  };

  const handleSendClick = () => {
    setIsVisible(false);
  };

  const handleNewChatClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.location.href = "/"; // Reload the page
  };

  return (
    <div className="main-content">
      <div className='header'>
       <h1>ജന സഹായി</h1>
       <Link to="/aboutus" className="aboutus circle-link" data-hover="About Us">
        {/* <InfoIcon style={{ fontSize: 50 }} /> */}
        ABOUT US
      </Link>
      </div>
      <div className="chat-container">
        
          {isVisible && <h2>എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?</h2>}
          <ChatBox messages={messages} addFeedback={addFeedback} />
          <div className='user-input'>
          <ChatInput addMessage={addMessage} onSend={handleSendClick} />
       
       
      
      </div>
     <Navbar/>
      </div>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
