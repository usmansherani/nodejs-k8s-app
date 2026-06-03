const express = require('express');
const os = require('os');
const app = express();

// Visitor counter (resets when container restarts — that's normal)
let visitorCount = 0;

app.get('/', (req, res) => {
  visitorCount++;

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>DevOps Project</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #1a1a2e;
        color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      .card {
        background: #16213e;
        border: 1px solid #0f3460;
        border-radius: 12px;
        padding: 40px;
        text-align: center;
        box-shadow: 0 0 30px rgba(0,200,255,0.1);
      }
      h1 { color: #00d4ff; }
      .info { margin: 15px 0; font-size: 18px; }
      .label { color: #aaa; font-size: 14px; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 DevOps Project- Live Demo </h1>
      <h3>Node.js + Docker + Kubernetes on AWS</h3>
      <div class="info">
        <div class="label">Timestamp</div>
        <strong>${new Date().toISOString()}</strong>
      </div>
      <div class="info">
        <div class="label">Container ID (Hostname)</div>
        <strong>${os.hostname()}</strong>
      </div>
      <div class="info">
        <div class="label">Visitor Count</div>
        <strong>${visitorCount}</strong>
      </div>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

// Health check endpoint (teacher requires this)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});