import React from "react";
import ChatWithAgent from "./ChatWithAgent";
import ChatAboutEmail from "./ChatAboutEmail";

const EmailAgentUI = ({ email }) => {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">Email Agent</h2>
      <ChatWithAgent />
      <ChatAboutEmail email={email} />
    </div>
  );
};

export default EmailAgentUI;
