import { JxoServer } from '../src/server';

const server = new JxoServer();

const source = server.configure()
    .map((config) => {
        config.port = 8000;
        config.hostname = 'localhost';
        config.routes = [];
    });

source.subscribe(x => console.log('Server started!'));
