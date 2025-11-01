import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 3001,
});

wss.on("connection", (socket) => {
  socket.on("error", () => {
    console.error;
  });

  socket.on("message", (data) => {
    console.log("received %s", data);
  });

  socket.send("hello from ws server");
});
