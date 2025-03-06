import React, { useState } from "react";

const SummarizeEmail = ({ email }) => {
  const [summary, setSummary] = useState("This is a summary.");

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">Summarize Email</h2>
      <p>{summary}</p>
      <button className="bg-gray-500 text-white p-2 mt-2" onClick={() => setSummary("Shorter summary!")}>Summarize</button>
    </div>
  );
};

export default SummarizeEmail;
