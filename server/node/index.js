const express = require("express")
const { WebSocketServer } = require("ws")

// routes
const indexRouter = require('./routes/index');
const brushRouter = require('./routes/brush');


// server
const app = express()

// static dir
app.use(express.static("public"))
app.use(express.static("images"))
brushRouter.use(express.static("public"))
indexRouter.use(express.static("public"))

// port
app.listen(8000, () => {
  console.log(`Example app listening on port 8000`)
})

// routes
app.use('/', indexRouter);
app.use('/brush', brushRouter);


// websocket
const wss = new WebSocketServer({ port: 8002 })
wss.on("connection", (ws, request) => {
  ws.on("close", () => {
    wss.clients.forEach((client) => {
    });
  });
  wss.clients.forEach(client => {
  })
  ws.on("message", data => {
    wss.clients.forEach(client => {
      client.send(data.toString())
    })
  })
})

module.exports = app;