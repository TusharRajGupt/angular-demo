import { User } from './../src/app/app.types';
import { Moment } from 'moment';
import moment = require('moment');

export class Session {

    static readonly VALID_MINUTES = 2;

    validUntil: Moment;

    constructor(public sessionId: string, public user: User) {
        this.validUntil = moment().add(Session.VALID_MINUTES, 'minutes');
    }

    isValid() {
        return moment().diff(this.validUntil, 'minutes') <= 0;
    }
}
