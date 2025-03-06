import React, { useState } from "react";

const ImproveEmail = ({ email }) => {
  const [suggestions, setSuggestions] = useState(["Improve sentence structure"]);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">Improve Email</h2>
      {suggestions.map((s, index) => <p key={index}>{s}</p>)}
      <button className="bg-yellow-500 text-white p-2 mt-2" onClick={() => setSuggestions([...suggestions, "Use a polite tone"])}>Get Suggestions</button>
    </div>
  );
};

export default ImproveEmail;
