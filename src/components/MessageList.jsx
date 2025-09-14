import Message from "./Message";

export default function MessageList({ messages, listRef }) {
  return (
    <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}
