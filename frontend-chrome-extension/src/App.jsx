import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailAgentUI from "./components/EmailAgentUI";
import SummarizeEmail from "./components/SummarizeEmail";
import WriteEmail from "./components/WriteEmail";
import ImproveEmail from "./components/ImproveEmail";
import ChatWithAgent from "./components/ChatWithAgent";
import ChatAboutEmail from "./components/ChatAboutEmail";
import RagSearch from "./components/RagSearch";
import SettingsScreen from "./components/SettingsScreen";

function App() {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "newEmail") {
        setEmail(message.email);
      }
    });
  }, []);

  const handlePasteEmail = async () => {
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/process-email", email);
      setResponse(res.data);
      setLoading(false);
    } catch (err) {
      setError("Reggy is under construction please try again in a bit");
      setLoading(false);
    }
  };

  return (
    <div className="p-4 w-[300px] border bg-white">
      <h1 className="text-xl font-bold mb-2">Email Assistant</h1>
      {email ? (
        <div>
          <h2 className="text-lg font-semibold">Detected Email</h2>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p><strong>Body:</strong> {email.body}</p>
          <button
            className="bg-blue-500 text-white p-2 mt-2 rounded"
            onClick={handlePasteEmail}
            disabled={loading}
          >
            Paste an Email
          </button>
        </div>
      ) : (
        <p>No new emails detected</p>
      )}
      {loading && <div className="spinner">Loading...</div>}
      {error && <p className="text-red-500">{error}</p>}
      {response && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Student Information</h2>
          {response.studentInfo ? (
            <div>
              <p><strong>Name:</strong> {response.studentInfo.name}</p>
              <p><strong>Student ID:</strong> {response.studentInfo.studentId}</p>
              <p><strong>FAFSA Submission Date:</strong> {response.studentInfo.fafsaDate}</p>
              <p><strong>Current Aid Status:</strong></p>
              <ul>
                {response.studentInfo.aidStatus.map((status, index) => (
                  <li key={index}>{status}</li>
                ))}
              </ul>
              <p><strong>Outstanding Requirements:</strong></p>
              <ul>
                {response.studentInfo.outstanding.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No student information available.</p>
          )}
          <h2 className="text-lg font-semibold mt-4">Draft Response</h2>
          <p>{response.draft || "No draft response available."}</p>
          <h2 className="text-lg font-semibold mt-4">Sources</h2>
          <p>{response.sources ? response.sources.policy : "No sources available."}</p>
          {response.sources && <button className="bg-gray-500 text-white p-2 mt-2 rounded">Copy</button>}
        </div>
      )}
      <div className="mt-4">
        <EmailAgentUI />
        <SummarizeEmail />
        <WriteEmail />
        <ImproveEmail />
        <ChatWithAgent />
        <ChatAboutEmail />
        <RagSearch />
        <SettingsScreen />
      </div>
    </div>
  );
}

export default App;