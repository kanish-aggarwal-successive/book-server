import pkg from 'merge-graphql-schemas';
const { fileLoader, mergeTypes } = pkg;
import * as book from "./book/query.js";
import path from 'path'

const __dirname = path.resolve();

const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));

const typeDefs = mergeTypes(typesArray, { all: true });

export default {
    resolvers: {
        Query: {
            ...book.Query
        },
        Mutation: {
            ...book.Mutation
        }
    },
    typeDefs,
};