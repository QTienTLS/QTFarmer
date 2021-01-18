const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;
const route = require('./routes');

app.use(express.static('src\\public'));
app.engine('hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.use(morgan('combined'));
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
