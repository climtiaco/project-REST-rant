require('dotenv').config()

//
const express = require('express')
const app = express()


//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Also if I uncomment this part, the app crashes
// 2.15.23 This is still breaking my app right now so not sure quite yet whats happening. Tried going into my places.js to add more backticks to see if that was the issue but it was not
// Figured it out again, I forgot to put the "period" in "./controllers/places" so now I understand this part better because its tracking where the route is going.
app.use('/places', require('./controllers/places'))

// Home Page
app.get('/', (req, res) => {
    res.render('home')
})

//Page Not Found .... Found out that this is what's making my page crash
// 2.15.23 Fixed my issue with the app crashing by adding backticks to the res.send
app.get('*', (req, res) => {
     res.render('error404')
})



app.listen(process.env.PORT)

