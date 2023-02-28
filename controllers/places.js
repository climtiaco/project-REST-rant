const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new', { places })
})

router.post('/', (req, res) => {
  // console.log(req.body) (No longer need this. Was used to make sure everything was rendering properly)
  // This will be the default photo if none is provided
  if (!req.body.pic) {
    req.body.pic = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/', (req, res) => {
   res.render(`places/index`, {places})
})
//Activity rest-rant part 5 (I might have messed up here for part 2)

//Commented this code out because watching the video back where you ran through the entire project again, I didn't see this in your code. It was breaking my code previously, but now its not doing that anymore. Maybe its bc I corrected everything correctly in the post route above.
// router.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('POST /places')
// })

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] }) 
  }
});


module.exports = router