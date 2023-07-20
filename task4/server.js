// Load the core modules
const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Write the response content
  res.write('<h1>Hello, this is my Node.js server!</h1>');
  res.end();
});

// Start the server and listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
