"use client";

import React, { useState } from 'react';
import ChatInterface from '@/components/ChatInterface'; // Assuming @/components path alias

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  type?: 'text' | 'template_selection' | 'credential_input_prompt' | 'confirmation';
  data?: any; // For structured data like template options
}

export default function CreateWebsitePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [botIsTyping, setBotIsTyping] = useState(false);
  const [chatState, setChatState] = useState<'initial' | 'awaiting_description' | 'awaiting_template' | 'awaiting_credentials_choice' | 'awaiting_credentials_input' | 'generating'>('initial');

  // Placeholder data for templates
  const templates = [
    { id: 'tpl_modern_ecommerce', name: 'Modern E-commerce', description: 'Sleek and professional for online stores.' },
    { id: 'tpl_minimalist_blog', name: 'Minimalist Blog', description: 'Clean and content-focused for bloggers.' },
    { id: 'tpl_dynamic_review', name: 'Dynamic Review Site', description: 'Engaging layout for product reviews.' },
  ];

  const sendBotMessage = (text: string, type?: Message['type'], data?: any) => {
    const botMessage: Message = {
      id: Date.now().toString() + '-bot',
      text,
      sender: 'bot',
      type,
      data,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const handleUserMessageSubmit = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: messageText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setBotIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing

    switch (chatState) {
      case 'initial':
      case 'awaiting_description':
        sendBotMessage(`Got it! You're looking to create a site based on: "${messageText}". Now, let's choose a template.`, 'template_selection', { templates });
        // For a real app, here you'd display template options more interactively
        sendBotMessage("Please type the name of the template you'd like to use (e.g., 'Modern E-commerce').");
        setChatState('awaiting_template');
        break;

      case 'awaiting_template':
        const selectedTemplate = templates.find(t => t.name.toLowerCase() === messageText.toLowerCase());
        if (selectedTemplate) {
          sendBotMessage(`Great! You've selected the "${selectedTemplate.name}" template. Would you like to provide credentials for automated setup (e.g., for a CMS or hosting)? This is optional. Type 'yes' or 'no'.`, 'credential_input_prompt');
          setChatState('awaiting_credentials_choice');
        } else {
          sendBotMessage("I couldn't find that template. Please choose from: Modern E-commerce, Minimalist Blog, or Dynamic Review Site.");
        }
        break;

      case 'awaiting_credentials_choice':
        if (messageText.toLowerCase() === 'yes') {
          sendBotMessage("Please provide the necessary credentials. For this demo, just type 'creds_provided'. In a real app, you'd see secure input fields here.");
          setChatState('awaiting_credentials_input');
        } else {
          sendBotMessage("Okay, we'll skip credential input. I'm now 'generating' your website with the chosen template. (This is a placeholder - full generation features are coming soon!)", 'confirmation');
          setChatState('generating');
          // Simulate generation and provide a placeholder link
          await new Promise(resolve => setTimeout(resolve, 2000));
          sendBotMessage("Your website [placeholder_site_name] is ready! Access it at: http://placeholder-link.com", 'confirmation');
        }
        break;

      case 'awaiting_credentials_input':
        sendBotMessage("Credentials received (placeholder). I'm now 'generating' your website. (This is a placeholder - full generation features are coming soon!)", 'confirmation');
        setChatState('generating');
        await new Promise(resolve => setTimeout(resolve, 2000));
        sendBotMessage("Your website [placeholder_site_name_with_creds] is ready! Access it at: http://placeholder-link-creds.com", 'confirmation');
        break;
      
      default:
        sendBotMessage("I'm not sure how to handle that right now.");
    }
    setBotIsTyping(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 bg-gray-800 shadow-md rounded-t-lg">
        <h1 className="text-3xl font-bold text-orange-400">Create a New Affiliate Website</h1>
        <p className="text-gray-400 mt-1">Let our AI help you build your next affiliate site. Start by describing your site or providing an affiliate link.</p>
      </div>
      <ChatInterface
        initialBotMessage={chatState === 'initial' ? "Let's build your new affiliate website! Please provide your primary affiliate link, or describe the type of website or niche you're targeting." : undefined}
        inputPlaceholder={chatState === 'awaiting_template' ? "Type template name..." : chatState === 'awaiting_credentials_choice' ? "Type 'yes' or 'no'..." : chatState === 'awaiting_credentials_input' ? "Enter credentials (demo)..." : "Describe your site or paste affiliate link..."}
        onMessageSubmit={handleUserMessageSubmit}
        botIsTyping={botIsTyping}
        messages={messages}
      />
    </div>
  );
}

