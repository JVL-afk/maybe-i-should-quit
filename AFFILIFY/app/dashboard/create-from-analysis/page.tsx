"use client";

import React, { useState } from 'react';
import ChatInterface from '@/components/ChatInterface'; // Assuming @/components path alias
import { useRouter, useSearchParams } from 'next/navigation'; // To get potential analysis data from query params

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  type?: 'text' | 'template_selection' | 'credential_input_prompt' | 'confirmation';
  data?: any; // For structured data like template options
}

export default function CreateFromAnalysisPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const analysisData = searchParams.get('analysis_content') || "previous analysis data (placeholder)"; // Example of getting data

  const [messages, setMessages] = useState<Message[]>([]);
  const [botIsTyping, setBotIsTyping] = useState(false);
  // Simplified state machine similar to create-website page
  const [chatState, setChatState] = useState<'initial' | 'awaiting_template' | 'awaiting_credentials_choice' | 'awaiting_credentials_input' | 'generating'>('initial');

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

  const initialBotPrompt = `Great! Let's create an affiliate website based on the insights from your analysis: "${analysisData}". You can add any specific instructions or preferences below, or we can proceed with the current information. First, let's choose a template.`;

  useState(() => {
    // Send the initial bot message when the component mounts and if no messages exist
    if (messages.length === 0) {
        sendBotMessage(initialBotPrompt + " Please type the name of the template you'd like to use (e.g., 'Modern E-commerce').", 'template_selection', { templates });
        setChatState('awaiting_template');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once on mount


  const handleUserMessageSubmit = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: messageText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setBotIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    switch (chatState) {
      case 'awaiting_template':
        const selectedTemplate = templates.find(t => t.name.toLowerCase() === messageText.toLowerCase());
        if (selectedTemplate) {
          sendBotMessage(`Excellent! You've selected the "${selectedTemplate.name}" template. Would you like to provide credentials for automated setup? Type 'yes' or 'no'.`, 'credential_input_prompt');
          setChatState('awaiting_credentials_choice');
        } else {
          sendBotMessage("I couldn't find that template. Please choose from: Modern E-commerce, Minimalist Blog, or Dynamic Review Site.");
        }
        break;

      case 'awaiting_credentials_choice':
        if (messageText.toLowerCase() === 'yes') {
          sendBotMessage("Please provide the necessary credentials. For this demo, just type 'creds_provided'.", 'credential_input_prompt');
          setChatState('awaiting_credentials_input');
        } else {
          sendBotMessage("Okay, skipping credential input. I'm now 'generating' your website based on the analysis and template. (Placeholder)", 'confirmation');
          setChatState('generating');
          await new Promise(resolve => setTimeout(resolve, 2000));
          sendBotMessage("Your website [analyzed_site_name] is ready! Access it at: http://placeholder-analysis-site.com", 'confirmation');
        }
        break;

      case 'awaiting_credentials_input':
        sendBotMessage("Credentials received (placeholder). Generating your website based on analysis... (Placeholder)", 'confirmation');
        setChatState('generating');
        await new Promise(resolve => setTimeout(resolve, 2000));
        sendBotMessage("Your website [analyzed_site_creds_name] is ready! Access it at: http://placeholder-analysis-creds-site.com", 'confirmation');
        break;

      default:
        // This case should ideally not be hit if the initial message sets the state correctly.
        // For robustness, you might want to re-prompt for template or handle as an error.
        sendBotMessage("Let's start by choosing a template for the website based on your analysis. Please type the name of the template (e.g., 'Modern E-commerce').", 'template_selection', { templates });
        setChatState('awaiting_template');
        break;
    }
    setBotIsTyping(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 bg-gray-800 shadow-md rounded-t-lg">
        <h1 className="text-3xl font-bold text-green-400">Create Website from Analysis</h1>
        <p className="text-gray-400 mt-1">Building upon your previous website analysis.</p>
      </div>
      <ChatInterface
        // initialBotMessage is handled by useEffect now to include dynamic data
        inputPlaceholder={chatState === 'awaiting_template' ? "Type template name..." : chatState === 'awaiting_credentials_choice' ? "Type 'yes' or 'no'..." : chatState === 'awaiting_credentials_input' ? "Enter credentials (demo)..." : "Confirm details or type template..."}
        onMessageSubmit={handleUserMessageSubmit}
        botIsTyping={botIsTyping}
        messages={messages}
      />
    </div>
  );
}

