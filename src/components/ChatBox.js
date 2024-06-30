import React, { useEffect, useRef } from 'react';
import './ChatBox.css';

const ChatBox = ({ messages }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={chatContainerRef} className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          <div className={`message ${msg.sender}`}>{msg.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
