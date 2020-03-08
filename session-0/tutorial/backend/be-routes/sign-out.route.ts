import { Request, Response } from 'express';
import { sessionStore } from './../database/session-store';

export function signOutUser(req: Request, res: Response) {
    const cookieName = 'SESSIONID';
    const sessionId = req.cookies[cookieName];
    sessionStore.destroySession(sessionId);
    res.clearCookie(cookieName);
    res.status(200).send({ status: 'OK'});
}
