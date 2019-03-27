const express = require('express')
const app = express()
const port = 8080

// app.get('/piya', (req, res) =>
//     res.send('Hello World!'))

// app.post('/piya', (req, res) =>
//     res.send('Got a POST request'))

// app.all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
// })
// app.get('/example/b', (req, res) {
// app.get('/example/b', function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, function (req, res) {
//     res.send('Hello from B!')
//   })
// })
// // app.get('/', (req, res) =>
// //     res.send('root'))

// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   var cb2 = function (req, res) {
//     res.send('Hello from C!')
   
//   }
//   app.get('/example/d', [cb0, cb1], function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, function (req, res) {
//     res.send('Hello from D!')
//   })
//   app.get('/example/c', [cb0, cb1, cb2])


var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`))