import React, { useState } from "react";
import UrlForm from "./components/UrlForm";
import ShortenedUrl from "./components/ShortendUrl";
import "./App.css";

function App() {
  const [shortened, setShortened] = useState(null);

  const handleShorten = (originalUrl) => {
    const shortUrl = `short.ly/${Math.random().toString(36).substr(2, 6)}`;
    setShortened({ original: originalUrl, short: shortUrl });
  };

  return (
    <div className="App">
      <h1>React URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      {shortened && (
        <ShortenedUrl
          original={shortened.original}
          shortened={shortened.short}
        />
      )}
    </div>
  );
}

export default App;
