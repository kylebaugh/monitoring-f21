// const express = require('express')
// const path = require('path')
// const Rollbar = require('rollbar')

// let rollbar = new Rollbar({
//     accessToken: '',
//     captureUncaught: true,
//     captureUnhandledRejections: true
// })

// const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
// })

// const port = process.env.PORT || 4545

// app.listen(port, () => console.log(`Server running on port ${port}`))


const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '61a8299df9294656ab54d3e06c247f14',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})