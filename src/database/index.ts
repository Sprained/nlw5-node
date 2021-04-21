import { createConnection, ConnectionManager } from 'typeorm'

import {
    type, host, port, username, password, database
} from '../config/database';

class Database {
    constructor() {
        this.init();
    }

    async init() {
        // await createConnection({
        //     type: type,
        //     host: host,
        //     port: port,
        //     username: username,
        //     password: password,
        //     database: database,
        // });

        await createConnection();
    }
}

export default new Database();