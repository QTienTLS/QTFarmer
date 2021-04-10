const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3001


app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
//set path tới thư mục views trong src/resources ('views' = resources/views)
app.set('views',path.join(__dirname,'resources/views'))
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})