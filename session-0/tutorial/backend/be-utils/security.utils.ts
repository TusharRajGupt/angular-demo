import { randomBytes } from 'crypto';
import { promisify } from 'util';

export const random = promisify(randomBytes);


