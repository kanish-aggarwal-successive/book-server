// // const express = require('express')
// import express from 'express'
// import { graphqlHTTP } from 'express-graphql'
// import { buildSchema } from 'graphql'
// const expressPlayground  = require('graphql-playground-middleware-express').default


// const configuration = require('./config/configurations.js')
// const Server = require('./server.js')

// const server = new Server(configuration);
// server.bootstrap();


// const schema = buildSchema(`
//   type Query {
//     hello(name: String!): String!
//   }
// `)

// const resolvers = {
//     hello: (args) => `Hello ${args.name}`,
// }

// const app = express()

// app.use(
//     '/graphql',
//     graphqlHTTP((req) => ({
//         schema,
//         rootValue: resolvers
//     }))
// )

// const port = 8080

// app.get('/', expressPlayground({ endpoint: '/graphql' }))

// app.listen({ port }, () => {
//     console.log(`🚀 Server ready at http://localhost:${port}/graphql`)
// })

import schema from './modules/index.js';
import configuration from './config/configurations.js';
import Server from './server.js';

const server = new Server(configuration);
server.bootstrap();
server.setupApolloServer(schema);