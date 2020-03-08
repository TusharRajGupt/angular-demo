import * as express from 'express';
import { Application } from 'express';
import * as https from 'https';
const bodyParser = require('body-parser');

import { signInUser } from './be-routes/sign-in.route';

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/signin')
    .post(signInUser);


// launch an HTTP Server
const httpServer = app.listen(2300, () => {
    console.log('HTTP server running at https://localhost:' + 2300);
});










