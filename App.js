import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ChatMessage from './components/ChatMessage';
import Navbar from './components/Navbar';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, sender) => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender }]);
  };

  return (
    <div className="App"> 
      <Navbar />
      <div className="main-content">
        <h1>Jana Sahayi</h1>
        
        <div className="chat-container">
        <h2>എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?</h2>
          <ChatBox messages={messages} />
          <ChatInput addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
