const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "DevSecOps Pipeline Demo",
    version: "1.0.0",
    env: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

module.exports = app;