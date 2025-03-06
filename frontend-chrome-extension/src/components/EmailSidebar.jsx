import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function EmailSidebar() {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const draftRef = useRef(null);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "newEmail") {
        setEmail(message.email);
      }
    });
  }, []);

  const processEmail = async () => {
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/process-email", email);
      setResponse(res.data);
    } catch {
      setError("Reggy is under construction please try again in a bit");
    }
    setLoading(false);
    if (draftRef.current) {
      draftRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-2 bg-white border fixed right-0 top-0 w-[300px]">
      <h2 className="text-xl font-bold">Detected Email</h2>
      {email ? (
        <>
          <p><b>Subject:</b> {email.subject}</p>
          <p><b>Body:</b> {email.body}</p>
          <button onClick={processEmail} className="mt-2 bg-blue-500 text-white p-2 rounded">Paste an Email</button>
        </>
      ) : (
        <p>No new emails detected</p>
      )}
      {loading && <div className="spinner"></div>}
      {error && <p className="text-red-500">{error}</p>}
      {response && (
        <div ref={draftRef}>
          <h2 className="font-bold">Draft Response</h2>
          <p>{response.draft}</p>
          {response.flag && <p className="text-red-500">⚠️ Poor Response</p>}
          <p className="text-gray-500">Sources: {response.sources}</p>
          <button onClick={() => navigator.clipboard.writeText(response.draft)}>Copy</button>
        </div>
      )}
    </div>
  );
}
