const express = require('express');
const next = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configure middleware
  server.use(cors()); // Allow CORS requests
  server.use(bodyParser.json()); // Parse JSON bodies

  // Custom API routes
  server.use('/api/users', require('./src/app/api/users/route'));

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = parseInt(process.env.PORT, 10) || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
