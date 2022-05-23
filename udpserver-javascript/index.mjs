import dgram from "dgram";

const LOOPBACK_IP = "127.0.0.1";
const socket = dgram.createSocket("udp4");
socket.bind(5500, LOOPBACK_IP);
socket.on("message", (msg, info) => {
    console.log(`My server got a datagram ${msg}, from: ${info.address}:${info.port}`);
});