// src/components/UrlHistory.jsx
import React from "react";
import ShortenedUrl from "./ShortendUrl";

const UrlHistory = ({ urls }) => {
  if (urls.length === 0) return <p>No URLs shortened yet.</p>;

  return (
    <div className="url-list">
      {urls.map((item, index) => (
        <ShortenedUrl
          key={index}
          original={item.original}
          shortened={item.short}
        />
      ))}
    </div>
  );
};

export default UrlHistory;
