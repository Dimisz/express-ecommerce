const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const { engine } = require('express-handlebars');

const app = express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views'); //used by default, but need to change if using different dirname

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const pageNotFoundRoute = require('./controllers/noPageFoundController');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(pageNotFoundRoute.showPageNotFound);

app.listen(3000);
