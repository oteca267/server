const express = require('express');;
const path = require('path');
const bodyparser = require('body-parser');
const app = express();



const routes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} ${req.method} `);
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


//routes 
app.use(routes);


//static files 
app.use(express.static(path.join(__dirname, 'public')));


//strat the server 

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
});