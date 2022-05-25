# Network Examples

This repository is used to store the code written during the course Fundamentals of Networking for Effective Backend Design.

## How to run it?

### Javascript UDP

```bash
# UDP
#
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
```

### C UDP

```bash
# UDP
#
# for the C project
cd udpserver-c
gcc main.c -o udp-server.out
./udp-server.out
# on a different terminal run this command to stablish connection
nc -u 127.0.0.1 5501
# start typing and hitting enter to send the message
```

### Javascript TCP

```bash
# TCP
#
# for the JAVASCRIPT project:
# start node project
cd tcpserver-javascript
node index.mjs

# on a different terminal run this command to stablish connection
nc 127.0.0.1 8800
# start typing and hitting enter to send the message
# inspect the terminal running the Node.js application
```

### C TCP

```bash
# TCP
#
# for the C project
cd tcpserver-c
gcc main.c -o tcp-server.out
./tcp-server.out
# on a different terminal run this command to stablish connection
nc 127.0.0.1 8801
# start typing and hitting enter to send the message
```