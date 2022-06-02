<!-- 
^ -------------HANDLEBARS MODULES


? hbs VS express-handlebars

Really similar modules, probs better to stick w express-handlebars since its has 
more maintainers, and downloads

~ -- hbs module
to use handlebars w hbs:
just require the module
$   const hbs = require('hbs')
and set the view engine for the server(app)
$   server.set('view engine', 'hbs')
and you are good to start inyecting html
can use hbs extension as it is.

~ -- express-handlebars module
just require the module
$   const hbs = require('express-handlebars')
set the app engine to use the shortened extension
$   server.engine('hbs', hbs.engine({ extname: 'hbs' }))
and set the view engine for the server(app)
$   server.set('view engine', 'hbs')
and good to start inyecting html

 -->