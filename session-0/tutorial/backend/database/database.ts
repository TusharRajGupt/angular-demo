import * as _ from 'lodash';
import { DbUser } from './data.types';
import { USERS } from './data';

class InMemoryDatabase {

    validateAndSignIn(username: string, password: string) {
        console.log(username);
        console.log(password);
        if (username === 'admin') {
            return true;
        }
        return false;

    }

    findUser(username: string): DbUser {
        console.log('Finding user by:', username);
        const users = _.values(USERS);
        const foundUser = _.find(users, user => user.username === username);
        console.log('user retrieved:', foundUser);
        return foundUser;
    }

}

export const db = new InMemoryDatabase();
