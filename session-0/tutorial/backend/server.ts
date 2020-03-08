import * as express from 'express';
import { Application } from 'express';
import * as https from 'https';
import { signInUser } from './be-routes/sign-in.route';


const app: Application = express();



const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean },
];

const options = commandLineArgs(optionDefinitions);

app.route('/api/signin')
    .post(signInUser);


// launch an HTTP Server
const httpServer = app.listen(2300, () => {
    console.log('HTTP Server running at https://localhost:' + 2300);
});










