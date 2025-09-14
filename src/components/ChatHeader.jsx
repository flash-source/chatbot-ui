// ChatHeader.jsx
export default function ChatHeader() {
  return (
    <div className="bg-[#5B7DB3] px-5 py-4 flex items-center gap-3 border-b border-[#E6F0FF]">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2596BE] text-xl shadow">
        🤖
      </div>
      <div>
        <h2 className="text-white font-semibold">Chatbot</h2>
        <p className="text-[#E6F0FF] text-xs">● Online</p>
      </div>
    </div>
  );
}
