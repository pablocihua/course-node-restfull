require('./config/config');

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT;

/** Middlewares */

// Parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hi World');
});

app.get('/users', (req, res) => {
    res.send('getUSers');
});

app.post('/user', (req, res) => {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400)
            .json({
                ok: false,
                message: 'The name is necessary'
            });
    } else {
        res.json({
            body
        });
    }
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/user', (req, res) => {
    res.send('delete users');
});

app.listen(port, () => {
    console.log(`Listening request in port ${ port }`)
});