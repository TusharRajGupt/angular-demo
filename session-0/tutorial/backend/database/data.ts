import { DbUser } from './data.types';


export const USERS: { [key: number]: DbUser } = {
    1: {
        id: 1,
        username: 'tushar',
        password: 'abcd'
    },
    2: {
        id: 2,
        username: 'admin',
        password: '1234'
    }
};
