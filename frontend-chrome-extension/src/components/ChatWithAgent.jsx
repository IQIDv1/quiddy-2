import React, { useState } from "react";

const ChatWithAgent = () => {
  const [conversation, setConversation] = useState(["AI: How can I help?"]);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">Chat With Agent</h2>
      {conversation.map((msg, index) => <p key={index}>{msg}</p>)}
      <button className="bg-green-500 text-white p-2 mt-2" onClick={() => setConversation([...conversation, "User: Need help!"])}>Ask AI</button>
    </div>
  );
};

export default ChatWithAgent;
