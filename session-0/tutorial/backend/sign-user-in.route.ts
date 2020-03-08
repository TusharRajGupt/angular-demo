import { Request, Response } from 'express';
import { db } from './database/database';

export function signUserIn(req: Request, res: Response) {
    const credentials = req.body;
    console.log('res', res);
    const isValid = db.validateAndSignIn(credentials.username, credentials.password);
    console.log(isValid);
    res.status(200).json({
        isValid
    });
}
