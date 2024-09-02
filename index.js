/**
 * Replace this file with your script and restart the container to see changes.
 * Don't forget to expose proper port(s) that your script is using.
 * Make sure to mount the `/app` directory to the current folder.
 * For example:
 *     docker run --restart unless-stopped -d -v './:/app' -p 80:80 afunworm/nodedockerize:latest
 *
 * Or if you have `docker-compose.yml`:
 * ```
 * services:
 *   nodedockerize:
 *     restart: unless-stopped
 *     volumes:
 *       - ./:/app
 *     ports:
 *       - 80:80
 *     image: afunworm/nodedockerize:latest
 * ```
 * Then you can just run: `docker compose up -d`.
 */
const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });

	res.end(
		"Hello, World, from NodeDockerize! You can change the code and restart the container to update your script."
	);
});

server.listen(80, () => {
	console.log("Server is running on http://localhost:80");
});
