const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000,
    messages = require('./controllers/messages_controller')

app.use(bodyParser.json())
express.static(__dirname + '/../public/build')

app.post('/api/messages', messages.create)
app.get('/api/messages', messages.read)
app.put('/api/messages/:id', messages.update)
app.delete('/api/messages/:id', messages.delete)

app.listen(port, () => console.log(`Listening on port ${port}.`))