const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send("Krisp2k is online!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is online!")
  })
}

module.exports = keepAlive