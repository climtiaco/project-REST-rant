const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

router.get('/', (req, res) => {
    let places = [{

        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/dreamcoffeeshop.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/lattes.jpg'
       }]
res.render(`places/index`, {places})
})
//Activity rest-rant part 5 (I might have messed up here for part 2)


router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router