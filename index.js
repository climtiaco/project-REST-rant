require('dotenv').config()

//
const express = require('express')
const app = express()

// Also if I uncomment this part, the app crashes
//app.use('/places', require('/controllers/places'))

// Home Page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Page Not Found .... Found out that this is what's making my page crash
// app.get('*', (req, res) => {
//      res.status(404).send(<h1>404 Page</h1>)
// })
app.listen(process.env.PORT)

