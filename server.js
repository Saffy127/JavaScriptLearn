const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const session = require('express-session');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Session configuration
app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static('public'));

wss.on('connection', (ws, req) => {
  ws.on('message', (message) => {
    // Broadcast only if user is authenticated
    if (req.session.username) {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(`${req.session.username}: ${message}`);
        }
      });
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
