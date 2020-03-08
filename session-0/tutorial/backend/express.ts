import * as express from 'express';
import {Application} from 'express';
import * as https from 'https';
import * as _ from 'lodash';
import { signUserIn } from './sign-user-in.route';

const app: Application = express();



app.route('/api/signin')
    .post(signUserIn);



const httpServer = app.listen(2300, () => {
    console.log('HTTP Server running at https://localhost:' + '2300');
});








