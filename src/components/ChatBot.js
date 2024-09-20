import React, { useState } from 'react';
import '../styles/ChatBot.css'; // Import chatbot styles

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="chatbot" onClick={toggleChat}>
        <img src="/assets/chat-icon.png" alt="Chat Icon" />
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <header>
            ChatBot
            <button onClick={toggleChat} className="close-chatbot">
              X
            </button>
          </header>
          <div className="chat-content">
            <p>Hello! How can I assist you today?</p>
            {/* Chat conversation will go here */}
          </div>
          <footer>
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </footer>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
