// ChatMessage.jsx
export default function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} px-4`}>
      <div
        className={`px-4 py-3 rounded-2xl max-w-[75%] text-sm shadow-md transition-all duration-300 ${
          isUser
            ? "bg-[#2596BE] text-white rounded-br-none"
            : "bg-white text-[#5B7DB3] rounded-bl-none border border-[#E6F0FF]"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
