const express = require("express");
const socket = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
const PORT = 5000;
require("dotenv").config();

const auth = require("./middleware/auth");
const messageHandler = require("./controllers/messageHandler");
const socketMdware = require("./middleware/socketMdware");

app.use(express.json());
app.use(cors());

const rolesRouter = require("./routers/role");
const usersRouter = require("./routers/users");
const courseRouter = require("./routers/courrses");
const lessonsRouter = require("./Routers/lessons");

app.use("/lessons", lessonsRouter);
app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/courses", courseRouter);

// ================= SOCKET.IO =================

const server = http.createServer(app);

const io = socket(server, {
  cors: { origin: "*" },
});

const clients = {};

const users = io.of("/users");
const admin = io.of("/admin");

io.use(auth);
users.use(auth);
admin.use(auth);

users.on("connection", (socket) => {
  console.log("Connected to /users namespace");
});

admin.on("connection", (socket) => {
  console.log("Connected to /admin namespace");
});

io.on("connection", (socket) => {
  socket.use(socketMdware);

  const user_id = socket.handshake.headers.user_id;
  clients[user_id] = { socket_id: socket.id, user_id };

  messageHandler(socket, io);

  socket.on("disconnect", () => {
    for (const key in clients) {
      if (clients[key].socket_id === socket.id) {
        delete clients[key];
      }
    }
  });
});

// ================= START SERVER =================

server.listen(PORT, () => {
  console.log(`Server running with Socket.IO on http://localhost:${PORT}`);
});
