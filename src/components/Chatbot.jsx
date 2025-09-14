// Chatbot.jsx
import { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello 👋 How can I help you today?", sender: "bot" },
  ]);
  const messagesEndRef = useRef(null);

  const addMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Fake bot reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        text: "I'm a chatbot 🤖",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-md h-[80vh] bg-white 
                    border border-[#E6F0FF] rounded-2xl shadow-xl 
                    flex flex-col overflow-hidden">
      {/* Header */}
      <ChatHeader />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-3 bg-[#E6F0FF] scrollbar-thin scrollbar-thumb-[#5B7DB3]/60 scrollbar-track-transparent">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={addMessage} />
    </div>
  );
}
