// src/components/ShortenedUrl.jsx
import React from "react";

const ShortenedUrl = ({ original, shortened }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortened);
    alert("Copied to clipboard!");
  };

  return (
    <div className="url-item">
      <div>
        <p><strong>Original:</strong> <a href={original} target="_blank" rel="noreferrer">{original}</a></p>
        <p><strong>Short:</strong> <a href={original} target="_blank" rel="noreferrer">{shortened}</a></p>
      </div>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default ShortenedUrl;
