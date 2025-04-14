const express = require("express");
const Database = require("better-sqlite3");
const WebSocket = require("ws");
const app = express();
const port = 3001;

// Enable JSON parsing
app.use(express.json());

// Create SQLite database connection
const db = new Database(":memory:");

// Initialize database
db.prepare("CREATE TABLE numbers (value INTEGER)").run();

// Insert some example data
const insert = db.prepare("INSERT INTO numbers VALUES (?)");
for (let i = 1; i <= 5; i++) {
  insert.run(i);
}

app.listen(port, () => {
  console.log(`HTTP Server running at http://localhost:${port}`);
});
