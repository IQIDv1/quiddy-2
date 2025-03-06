import React from "react";
import EmailAgentUI from "./components/EmailAgentUI";
import SummarizeEmail from "./components/SummarizeEmail";
import WriteEmail from "./components/WriteEmail";
import ImproveEmail from "./components/ImproveEmail";
import ChatWithAgent from "./components/ChatWithAgent";
import ChatAboutEmail from "./components/ChatAboutEmail";
import RagSearch from "./components/RagSearch";
import SettingsScreen from "./components/SettingsScreen";

function App() {
  return (
    <div className="p-4 w-[300px] border bg-white">
      <h1 className="text-xl font-bold mb-2">Email Assistant</h1>
      <EmailAgentUI />
      <SummarizeEmail />
      <WriteEmail />
      <ImproveEmail />
      <ChatWithAgent />
      <ChatAboutEmail />
      <RagSearch />
      <SettingsScreen />
    </div>
  );
}

export default App;
