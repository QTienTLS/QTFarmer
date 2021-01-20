const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

//method override
app.use(methodOverride('_method'));

//middleware
app.use(express.urlencoded());
app.use(express.json());
//connect to database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.use(morgan('combined'));
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
