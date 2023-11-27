/*
 * Primary file for API
 *
 */

//Dependencies
const http = require('http');
const url = require('url');
// The server should respond to all requests with a string
const server = http.createServer(function (req, res) {
	// Get the URL and parse it
	let parsedUrl = url.parse(req.url, true);

	// Get the path
	let urlPath = parsedUrl.pathname;
	let trimmedPath = urlPath.replace(/^\/+|\/+$/g, '');

	// Send the response
	res.end('Hello World\n');

	// Log the request path
	console.log('Request is received on path: ' + trimmedPath);
});

// Start the server, and have it listen on port 3000
server.listen(3000, function () {
	console.log('the server is listening on port 3000');
});
