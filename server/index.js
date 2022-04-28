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

// const Rollbar = require('rollbar')

// let rollbar = new Rollbar({
//     accessToken: '',
//     captureUncaught: true,
//     captureUnhandledRejections: true
// })

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})