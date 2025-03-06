import React, { useState } from "react";

const RagSearch = () => {
  const [results, setResults] = useState(["Policy A"]);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">RAG Search</h2>
      {results.map((res, index) => <p key={index}>{res}</p>)}
      <button className="bg-purple-500 text-white p-2 mt-2" onClick={() => setResults([...results, "Policy B"])}>Search</button>
    </div>
  );
};

export default RagSearch;
