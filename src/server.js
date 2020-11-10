// const express = require('express')
// const bodyParser = require('body-parser')
// const { ApolloServer } = require('apollo-server-express')
// const { createServer } = require('http')

import express from "express";
import bodyParser from "body-parser";
import pkg from 'apollo-server-express';
import { createServer } from 'http';
import BookAPI from './datasource/Book.js';

const { ApolloServer } = pkg;

class Server {
    constructor(config) {
        this.app = express();
        this.config = config;
    }

    bootstrap = () => {
        this.initBodyParser();
        return this;
    };

    run = () => {
        const { app, config: { port }, } = this;
        this.app.listen(this.config.port, (err) => {
            if (err) {
                console.log("error");
                throw err;
            }
            console.log("App is running successfully on port " + port);
        });
    };

    initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    };


    async setupApolloServer(schema) {
        const { app } = this;
        this.server = new ApolloServer({
            ...schema,
            dataSources: () => {
                return {
                    BookAPI: new BookAPI(),
                };
            },
            context: ({ req }) => {
                if (req) {
                    return { token: req.headers.authorization };
                }
                return {};
            },
        });
        this.server.applyMiddleware({ app });
        this.httpServer = createServer(app);
        this.server.installSubscriptionHandlers(this.httpServer);
        this.run();
    }
}

export default Server