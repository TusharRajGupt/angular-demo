import { Request, Response } from 'express';

export function signInUser(req: Request, res: Response) {
    const creds = req.body;
    console.log('creds', creds);
    res.status(200).json({
        valid: true
    });
}
