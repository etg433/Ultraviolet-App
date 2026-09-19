import express from "express";
import { createServer } from "node:http";

const app = express();
const port = Number(process.env.PORT) || 8080;

app.use(express.static("./public"));
app.use((req, res) => res.sendFile("index.html", { root: "./public" }));

const server = createServer(app);
server.listen(port, "0.0.0.0", () => {
  console.log(`CreatorForge listening on port ${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
