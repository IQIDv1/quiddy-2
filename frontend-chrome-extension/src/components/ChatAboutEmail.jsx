import React, { useState } from "react";

const ChatAboutEmail = ({ email }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, "User message"]);
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">Chat About Email</h2>
      <div className="messages">{messages.map((msg, index) => <p key={index}>{msg}</p>)}</div>
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default ChatAboutEmail;
