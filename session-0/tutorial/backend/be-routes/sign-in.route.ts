import { Request, Response } from 'express';
import { random } from './../be-utils/security.utils';
import { db } from '../database/database';
import { sessionStore } from './../database/session-store';
import { DbUser } from 'backend/database/data.types';

export function signInUser(req: Request, res: Response) {
    const creds = req.body;
    console.log('creds', creds);
    const user = db.findUser(creds.username);
    if (user) {
        console.log('User exists');
        tryLoggingIn(creds, user, res);
    } else {
        res.sendStatus(403);
    }
    // createSession(res, creds);
}

async function tryLoggingIn(creds, user: DbUser, res: Response) {
    try {
        const sessionId = await createSession(res, creds);
        res.cookie('SESSIONID', sessionId);
        res.status(200).json({ id: user.id, username: user.username });

    } catch (err) {
        console.log('Login unsuccessful');
        console.log(err);
        res.sendStatus(403);
    }
}

async function createSession(creds, user) {
    const sessionId = await random(32).then(bytes => bytes.toString('hex'));
    console.log('sessionId', sessionId);
    sessionStore.createSession(sessionId, user);
    return sessionId;

}
