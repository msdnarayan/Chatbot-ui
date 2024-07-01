import React, { useEffect, useRef, useState } from 'react';
import './ChatBox.css';
import axios from 'axios';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ChatBox = ({ messages, addFeedback }) => {
  const chatContainerRef = useRef(null);
  const [feedbackIndex, setFeedbackIndex] = useState(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const toggleFeedbackInput = (index) => {
    setFeedbackIndex(feedbackIndex === index ? null : index);
  };

  const handleFeedbackChange = (index, event) => {
    const { value } = event.target;
    addFeedback(index, value); // Update feedback for the message at index
  };

  const handleKeyPress = (index, event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const { value } = event.target;
      addFeedback(index, value); // Save feedback when Enter is pressed
      sendFeedbackToServer(index, value); // Send feedback to the server
      setFeedbackIndex(null); // Close the feedback input
    }
  };

  const sendFeedbackToServer = async (index, feedback) => {
    try {
      const response = await axios.post('http://localhost:5000/feedback', {
        feedback,
        index
      });
      console.log('Feedback response:', response.data);
      // Optionally, you can add logic here to update the UI with the feedback response
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  return (
    <div ref={chatContainerRef} className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          <div className={`message ${msg.sender}`}>{msg.text}</div>
          {msg.sender === 'bot' && (
            <div className="feedback-container">
              {feedbackIndex === index ? (
                <div className="feedback-input">
                  <input
                    type="text"
                    placeholder="Provide feedback..."
                    value={msg.feedback || ''}
                    onChange={(e) => handleFeedbackChange(index, e)}
                    onKeyPress={(e) => handleKeyPress(index, e)}
                  />
                </div>
              ) : (
                <button className="feedback-button" onClick={() => toggleFeedbackInput(index)}>
                  Provide Feedback
                </button>
              )}
                   
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
