import { Request, Response } from 'express';
import { random } from './../be-utils/security.utils';

export function signInUser(req: Request, res: Response) {
    const creds = req.body;
    console.log('creds', creds);
    createSession(res, creds);
}

async function createSession(res, creds) {
    const sessionId = await random(32).then(bytes => bytes.toString('hex'));
    console.log('sessionId', sessionId);
    res.status(200).json({
        username: creds.username
    });

}
