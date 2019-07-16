const express = require('express');
const path =   require('path');
const bodyparser = require('body-parser');
const app = express();

const routes = require( './routes/index.js');

app.use(express.static('public'))

//sttings
app.set('port',process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');


// middlewares
app.use((req, res, next) =>  {
    console.log('${req.url} -${req.method}');
    next();
})

app.use(body-Parser.join());
app.use(body-Parser.urlenconded({extended: flase}));

//routes

app.use(routes);

//static file
app.use(express.static(path.join(__dirname, 'public')));


//start the server

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
});
