class InMemoryDatabase {

    validateAndSignIn(username: string, password: string) {
        console.log(username);
        console.log(password);
        if (username === 'admin') {
            return true;
        }
        return false;

    }

}

export const db = new InMemoryDatabase();
