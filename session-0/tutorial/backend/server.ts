import * as express from 'express';
import { Application } from 'express';
import * as https from 'https';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

import { signInUser } from './be-routes/sign-in.route';
import { signOutUser } from './be-routes/sign-out.route';
import { getUser } from './be-routes/get-user.route';

const app: Application = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.route('/api/signin')
    .post(signInUser);

app.route('/api/signout')
    .post(signOutUser);

app.route('/api/getUser')
    .post(getUser);


// launch an HTTP Server
const httpServer = app.listen(2300, () => {
    console.log('HTTP server running at https://localhost:' + 2300);
});










