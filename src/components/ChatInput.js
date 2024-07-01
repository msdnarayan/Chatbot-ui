import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ addMessage, onSend }) => {
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      addMessage(input, 'user');
      setIsSending(true);
      const messageToSend = input;
      setInput('');

      try {
        const response = await fetch('http://127.0.0.1:5000/answer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: messageToSend })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        addMessage(data.answer, 'bot');
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }

      setIsSending(false);
      onSend(); // Call the onSend function when the message is sent
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !isSending && handleSend()}
        placeholder="ഒരു സന്ദേശം ടൈപ്പ് ചെയ്യുക..."
      />
      <button onClick={handleSend} disabled={isSending}>
        അയയ്ക്കുക
      </button>
    </div>
  );
};

export default ChatInput;
