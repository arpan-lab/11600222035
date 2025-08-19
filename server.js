const express = require("express");
const cors = require("cors");

import authMiddleware from "./authmiddleware.jsx";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/shorten", authMiddleware, (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "Missing originalUrl" });
  }

  const shortUrl = `short.ly/${Math.random().toString(36).substr(2, 6)}`;
  res.json({ original: originalUrl, short: shortUrl });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
