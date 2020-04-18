#!/usr/bin/env node

const http = require('http')
const net = require('net')
const micromatch = require('micromatch')

const whitelist = require('../lib/whitelist')

const server = http.createServer((req, res) => {}).listen(process.env.PORT || 8080)

const verbose = process.argv.includes('-v')

server.addListener('connect', (req, socket, bodyhead) => {
  const hostPort = req.url.split(':')
  const host = hostPort[0]
  const port = parseInt(hostPort[1])
  
  if (!micromatch.isMatch(host, whitelist)) {
    if (verbose) console.log('!!! Blocking HTTPS request for:', host, port)
    return
  }

  if (verbose) console.log('Proxying HTTPS request for:', host, port)

  const proxySocket = new net.Socket()
  proxySocket.connect(port, host, () => {
    proxySocket.write(bodyhead)
    socket.write('HTTP/' + req.httpVersion + ' 200 Connection established\r\n\r\n')
  })

  proxySocket.on('data', chunk => {
    socket.write(chunk)
  })

  proxySocket.on('end', () => {
    socket.end()
  })

  proxySocket.on('error', () => {
    socket.write('HTTP/' + req.httpVersion + ' 500 Connection error\r\n\r\n')
    socket.end()
  })

  socket.on('data', chunk => {
    proxySocket.write(chunk)
  })

  socket.on('end', () => {
    proxySocket.end()
  })

  socket.on('error', () => {
    proxySocket.end()
  })
})

console.log(`Proxy server listening on port ${ process.env.PORT || 8080 }`)
