// backend/authMiddleware.js
const jwt = require("jsonwebtoken");

const SECRET_KEY = "QrdVYkZwBMFmfBUk"; // Use .env in production

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization header missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token,QrdVYkZwBMFmfBUk);
    req.user = decoded; // optional: attach user data
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}

module.exports = authMiddleware;
