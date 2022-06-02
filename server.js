// ^ ------------------------------------------
// ^ ----------- REQUIRE MODULES --------------
// require our express module
const express = require('express')
// require file system module - not installed individually since its included in node
const fs = require('fs')
// require handlebars
// const hbs = require('express-handlebars')
const hbs = require('hbs')

// create our server app in server variable
const server = express()
// ^ -------------------------------------------
// ^ ------- MIDDLEWARE

// ? -- server configuration
// setting server(app) to use public folder for accesing static files
server.use(express.static('public'))
// server.use(express.urlencoded({ extended: false }))

// ? -- Handlebars config
// setting handlebars to use .hbs as extension
// server.engine('hbs', hbs.engine({ extname: 'hbs' }))
// allowing our server(app) to use handlebars - register view engine
server.set('view engine', 'hbs')

// ^ -------------------------------------------
// ^ ------- ROUTES

// & -- home route
server.get('/', (req, res) => {
  // res.send(`We got a home route cuzzy!`)
  res.render('home')
})

// export our server variable: to index.js for testing reasons in the future
module.exports = server
