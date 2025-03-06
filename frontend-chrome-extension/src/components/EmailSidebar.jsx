import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EmailSidebar({ email }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (email) processEmail();
  }, [email]);

  const processEmail = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/process-email", email);
      setResponse(res.data);
    } catch {
      setError("Reggy is under construction please try again in a bit");
    }
    setLoading(false);
  };

  return (
    <div className="p-2 bg-white border fixed right-0 top-0 w-[300px]">
      <h2 className="text-xl font-bold">Detected Email</h2>
      <p><b>Subject:</b> {email?.subject || "No Subject"}</p>
      <p><b>Body:</b> {email?.body || "No Content"}</p>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {response && (
        <>
          <h2 className="font-bold">Student Info</h2>
          <p>Name: {response.studentInfo?.name || "N/A"}</p>
          <p>ID: {response.studentInfo?.studentId || "N/A"}</p>
          <p>FAFSA: {response.studentInfo?.fafsaDate || "N/A"}</p>

          <h2 className="font-bold">Draft Response</h2>
          <p>{response.draft || "N/A"}</p>
          <button onClick={() => navigator.clipboard.writeText(response.draft)}>Copy</button>
        </>
      )}
    </div>
  );
}
