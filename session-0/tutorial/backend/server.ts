import * as express from 'express';
import { Application } from 'express';
import * as https from 'https';


const app: Application = express();



const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean },
];

const options = commandLineArgs(optionDefinitions);

app.use('/api/signin', (req, res, next) => {
    res.status(200).json({
        message: 'succesful'
    });
});


// launch an HTTP Server
const httpServer = app.listen(2300, () => {
    console.log('HTTP Server running at https://localhost:' + 2300);
});










