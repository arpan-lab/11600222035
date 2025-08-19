import React, { useState } from "react";
import { isValidUrl } from "../utils/validators";

const UrlForm = ({ onShorten }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(input)) {
      setError("Please enter a valid URL (with http/https).");
      return;
    }

    onShorten(input);
    setInput("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        value={input}
        placeholder="Enter a long URL..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Shorten</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UrlForm;
