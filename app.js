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

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {
        pageTitle: '4004',
        path: '/404'
    });
});

app.listen(3000);