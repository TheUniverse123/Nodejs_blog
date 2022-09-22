const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')

// http logging
app.use(morgan('combined'))

// set express app home views
app.engine('hbs', engine({
    extname: ".hbs",
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    return res.render('home')
});

app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`));