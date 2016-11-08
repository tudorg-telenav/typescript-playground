"use strict";
const express = require('express');
class Server {
    constructor() {
        this.context = express();
        this.addRoutes();
    }
    addRoutes() {
        this.context.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }
    start() {
        this.context.listen(3123, () => {
            console.log('Electron`s main process is listening on port 3000!');
        });
        return this;
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map