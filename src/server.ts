import * as http from 'http';
import * as fs from 'fs';

import { Observable } from 'rxjs';

import { Dispatcher } from './dispatcher';

export interface JxoConfig {
    port: number;
    hostname: string;
    routes: any[];
}

export class JxoServer {
    config: JxoConfig;
    private dispatcher: any;
    private server: http.Server;

    configure(): Observable<JxoConfig> {
        return Observable.of(this.config);
    }

    start(): Observable<JxoServer> {
        this.dispatcher = new Dispatcher(this.config.routes);
        this.server = http.createServer(this.dispatcher);
        this.server.listen(this.config.port, this.config.hostname);

        return Observable.of(this);
    }
};
