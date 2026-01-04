const express = require("express");
const socket   = require("socket.io")
const http = require("http");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("dotenv").config();
const auth = require("./middleware/auth")
const messageHandler =  require("./controllers/messageHandler")
const socketMdware =  require("./middleware/socketMdware")
app.use(express.json());
app.use(cors());
const { pool } = require("./models/db");
const rolesRouter = require("./routers/role");
const usersRouter = require("./routers/users");
const courseRouter = require("./routers/courrses")
const lessonsRouter=require("./Routers/lessons");
//=====================================
const server = http.createServer(app);
const io = socket(server, { cors: { origin: "*" } });
const  clients = {};
const users = io.of("/users");
const admin = io.of("/admin");
users.on("connection" , (socket)=>{
  console.log("from users")
});
admin.on("connection", (socket)=>{
  console.log("from admin")
});
io.use(auth)
io.on("connection", (socket) => {
  socket.use(socketMdware)
  const user_id = socket.handshake.herders.user_id;
  clients[user_id]= {socket_id: socket.id , user_id}
   messageHandler(socket,io);
   socket.emit("erorr" , {error: error.message})
  socket.on("disconnect", () => {
for (const key in clients) {
  if (clients[key].socket_id === socket.id){
    delete clients[key];
  }}
  });
});

//==============================================
app.use("/lessons", lessonsRouter)
app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/courses",courseRouter)
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
