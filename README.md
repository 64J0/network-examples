# Network Examples

This repository is used to store the code written during the course Fundamentals of Networking for Effective Backend Design.

## How to run it?

```bash
# for the JAVASCRIPT project:
# start node project
cd udpserver-javascript
npm install
node index.mjs
# check this terminal

# on a different terminal run this command to stablish connection
nc -u 127.0.0.1 5500
# start typing and hitting enter to send the message
# inspect the terminal running the Node.js application

# -------------------------
# for the C project
cd udpserver-c
gcc main.c -o udp-server.out
./udp-server.out
```