"use client";

import React, { useState } from 'react';
import ChatInterface from '@/components/ChatInterface'; // Assuming @/components path alias

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  // Potentially add type and data for richer messages later
}

export default function AnalyzeWebsitePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [botIsTyping, setBotIsTyping] = useState(false);

  const handleUserMessageSubmit = async (messageText: string) => {
    // 1. Add user's message to the chat
    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: messageText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // 2. Simulate bot thinking and then responding (placeholder for actual API call)
    setBotIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay & processing

    // 3. Create and add bot's response
    // In a real app, this response would come from an API call to the backend
    // which would perform the website analysis.
    let botResponseText = '';
    if (messageText.toLowerCase().includes('http://') || messageText.toLowerCase().includes('https://')) {
      botResponseText = `Okay, I've received the URL: ${messageText}. I'm starting the analysis now. (This is a placeholder response - full analysis features are coming soon!)`;
    } else {
      botResponseText = "That doesn't look like a valid URL. Please provide a full URL starting with http:// or https://.";
    }

    const botMessage: Message = {
      id: Date.now().toString() + '-bot',
      text: botResponseText,
      sender: 'bot',
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setBotIsTyping(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 bg-gray-800 shadow-md rounded-t-lg">
        <h1 className="text-3xl font-bold text-purple-400">Analyze a Website</h1>
        <p className="text-gray-400 mt-1">Enter a website URL below to get AI-powered insights.</p>
      </div>
      <ChatInterface
        initialBotMessage="Welcome to the Website Analyzer! Please enter the full URL (e.g., https://www.example.com) of the website you'd like me to analyze."
        inputPlaceholder="Enter website URL..."
        onMessageSubmit={handleUserMessageSubmit}
        botIsTyping={botIsTyping}
        messages={messages}
      />
    </div>
  );
}

