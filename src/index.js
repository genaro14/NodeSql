const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
//initializations
const app = express();

// settings
const REST_PORT = 3000;

app.set('port', process.env.PORT || REST_PORT);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs.engine({
    defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));

// Globar Variables
app.use((req,res,next) => {
    next();
});

// Routes

app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(app.get('port'), ()=> {
    console.log('Server running on port', app.get('port'));
})
