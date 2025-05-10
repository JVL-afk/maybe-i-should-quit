"use client";

import React, { useState, FormEvent, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  type?: 'text' | 'analysis_result' | 'template_selection' | 'credential_input'; // For more complex messages
  data?: any; // For structured data like analysis results or template options
}

interface ChatInterfaceProps {
  initialBotMessage?: string;
  inputPlaceholder: string;
  onMessageSubmit: (messageText: string) => Promise<void>; // Async to allow for bot processing time
  botIsTyping?: boolean;
  messages: Message[];
  // Future props for interactive elements like buttons or template selectors
}

export default function ChatInterface({
  initialBotMessage,
  inputPlaceholder,
  onMessageSubmit,
  botIsTyping = false,
  messages = [],
}: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages, botIsTyping]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    await onMessageSubmit(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-3xl mx-auto bg-gray-800 shadow-xl rounded-lg">
      {/* Chat Messages Area */}
      <div className="flex-grow p-6 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {initialBotMessage && messages.length === 0 && (
          <div className="flex justify-start">
            <div className="bg-purple-600 text-white p-3 rounded-lg max-w-xs lg:max-w-md shadow">
              <p>{initialBotMessage}</p>
            </div>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`p-3 rounded-lg max-w-xs lg:max-w-md shadow ${msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-purple-600 text-white'}`}
            >
              {/* Basic text display, can be expanded for different message types */}
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        {botIsTyping && (
          <div className="flex justify-start">
            <div className="bg-purple-600 text-white p-3 rounded-lg max-w-xs lg:max-w-md shadow">
              <p className="animate-pulse">Bot is typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={inputPlaceholder}
            className="flex-grow p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            disabled={botIsTyping}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
            disabled={botIsTyping || !inputValue.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

