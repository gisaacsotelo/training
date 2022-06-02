// ^ ------------------------------------------
// ^ ----------- REQUIRE MODULES --------------
// require our express module
const express = require('express')
// require file system module - not installed individually since its included in node
const fs = require('fs')

// create our server app in server variable
const server = express()
// ^ -------------------------------------------
// ^ ------- MIDDLEWARE -- server configuration
// setting server(app) to use public folder for accesing static files
server.use(express.static('public'))

// ^ -------------------------------------------
// ^ ------- ROUTES

// & -- home route
server.get('/', (req, res) => {
  res.send(`We got a home route cuzzy!`)
})

// export our server variable: to index.js for testing reasons in the future
module.exports = server
