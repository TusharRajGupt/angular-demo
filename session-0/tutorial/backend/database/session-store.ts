import { User } from './../../src/app/app.types';
import { Session } from './../session';
class SessionStore {
    private sessions: {[key: string]: Session} = {};

    createSession(sid: string, user: User) {
        this.sessions[sid] = new Session(sid, user);
    }

    findUserBySessionId(sid: string): User | undefined {
        const session = this.sessions[sid];
        const isSessionValid = session && session.isValid();
        return isSessionValid ? session.user : undefined;
    }

    destroySession(sid: string) {
        delete this.sessions[sid];
    }
}

export const sessionStore = new SessionStore();
