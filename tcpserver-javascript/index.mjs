import net from "net";

const server = net.createServer(socket => {
    console.log(`TCP handshake successfull with ${socket.remoteAddress}:${socket.remotePort}`);
    socket.write("Hello client!"); // will send to the client
    socket.on("data", data => {
        console.log(`Received data ${data.toString()}`);
    });
});

const LOOPBACK_IP = "127.0.0.1";
server.listen(8800, LOOPBACK_IP);