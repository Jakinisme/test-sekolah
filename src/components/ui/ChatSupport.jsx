"use client";

import "@styles/bot.css";
import { Bot, X, Send } from "lucide-react";

export default function ChatSupport({
  isChatOpen,
  toggleChat,
  messages,
  isTyping,
  messagesEndRef,
  inputMessage,
  setInputMessage,
  sendMessage,
  formatTime,
}) {
  return (
    <div className="chat-support">
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="chat-toggle-btn"
          aria-label="Open chat support"
        >
          <Bot size={24} />
          <div className="hidden" hidden>
            <span className="chat-badge">1</span>
          </div>
        </button>
      )}

      {isChatOpen && (
        <div className={"chat-window"}>
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <Bot size={20} />
              </div>
              <div className="chat-header-text">
                <h3>VHSONEBOT</h3>
                <span className="chat-status">Online</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button
                onClick={toggleChat}
                className="chat-action-btn"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="chat-input-form">
            <div className="chat-input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
                maxLength={500}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={!inputMessage.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
