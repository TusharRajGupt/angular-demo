const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Aceess-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
    res.setHeader(
        'Aceess-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
})

app.use( '/patrons', (req, res, next) => {
    const patrons = [
        {id: '1', name: 'Flipkart'},
        {id: '2', name: 'Amazon'}
    ];
    res.status(200).json({
        data: patrons
    });
});

module.exports = app;