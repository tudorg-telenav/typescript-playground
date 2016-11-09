import * as express from 'express';

export class Server {

    private context: express.Application;

    constructor() {
        this.context = express();
        this.addRoutes();
    }

    private addRoutes() {
        this.context.get('/', (req: any, res: any) => {
            res.send('Hello World!');
        });
    }

    public start(): Server {
        this.context.listen(3123, () => {
            console.log('Electron`s main process is listening on port 3123!');
        });
        return this;
    }
}