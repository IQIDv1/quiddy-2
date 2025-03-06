import React, { useState } from "react";

const WriteEmail = () => {
  const [draft, setDraft] = useState("Dear student, here’s your financial aid update...");

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">Write Email</h2>
      <textarea className="border p-2 w-full" value={draft} onChange={(e) => setDraft(e.target.value)} />
      <button className="bg-blue-600 text-white p-2 mt-2" onClick={() => alert("Draft saved!")}>Save Draft</button>
    </div>
  );
};

export default WriteEmail;
