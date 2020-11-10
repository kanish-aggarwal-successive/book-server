import schema from './modules/index.js';
import configuration from './config/configurations.js';
import Server from './server.js';


const server = new Server(configuration);
server.bootstrap();
server.setupApolloServer(schema);