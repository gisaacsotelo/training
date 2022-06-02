// require  our server variable from server.js - //it cointsins our express application
const server = require('./server')

// decide port that will be used for our local hosting
//# note: remember to add process.env.PORT || when deploying to avoid port errors
const port = 3555

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is now listening on the port ${port}`)
})

/* 
# note:
# eslint-disable-next-line no-console
# is a comment read by eslint to ignore the next line to avoid the console.log issues
# it is read by es lint regardless of being a commented line

no-console: disallows the use of console
in JS that is designed to be executed in the browser, it is considered best practice
to avoid uidng methods on console, also the reason we separated this file from server.
*/
