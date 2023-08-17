const express = require('express')
const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '4aaafae94fdc44f39283fc2ee1b5f889',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(`${__dirname}/public`))

app.get('/api/cat', (req, res) => {
    rollbar.log('Got a cat!')
    res.status(200).send('Best regards from Flavio the cat.')
})

app.listen(4000, () => console.log("Server running on 4000"))
