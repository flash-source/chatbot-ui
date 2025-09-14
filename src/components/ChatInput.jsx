// ChatInput.jsx
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-4 py-3 bg-white border-t border-[#E6F0FF]"
    >
      <div className="flex items-center w-full bg-white border border-[#E6F0FF] rounded-full px-4 py-2 shadow-sm">
        {/* Input box */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-[#5B7DB3] placeholder:text-[#5B7DB3]/50 focus:outline-none text-base px-2"
        />
        {/* Send button */}
        <button
          type="submit"
          className="ml-3 p-3 rounded-full bg-[#2596BE] text-white shadow-md hover:bg-[#5B7DB3] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
