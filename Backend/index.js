const express = require("express")
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema')
require('dotenv').config();
const db = require('./db')
const models = require('./models');
const port = process.env.PORT || 4001;
const DB_HOST = process.env.DB_HOST;
console.log(typeDefs);
db.connect(DB_HOST);
const getUser = token => {
    if (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            throw new Error('Session invalid');
        }
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
    context: async ({ req }) => {
    const token = req.headers.authorization;
    const user = await getUser(token);
    return { models, user };
    }
    });
server.applyMiddleware({ app, path: '/api' });
app.listen({ port }, () =>
    console.log(`GraphQL server running at http://localhost:${port}${server.graphqlPath}`)
);