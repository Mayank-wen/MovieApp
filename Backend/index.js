// const express =require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
// const jwt = require("jsonwebtoken");
// const depthLimit = require('graphql-depth-limit');
// const {createComplexityLimitRule}  = require('graphql-query-complexity');

// const typeDefs = require('./schema');
// const resolvers = require('./resolver');
// const db = require('./db')
// const models = require('./models');
// require('dotenv').config();
// const app=express();
// const port = process.env.PORT || 4001;
// const DB_HOST = process.env.DB_HOST;
// console.log(typeDefs);
// db.connect(DB_HOST);
// const getUser = token => {
//     if (token) {
//         try {
//             return jwt.verify(token, process.env.JWT_SECRET);
//         } catch (err) {
//             throw new Error('Session invalid');
//         }
//     }
// };
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
//     context: async ({ req }) => {
//     const token = req.headers.authorization;
//     const user = await getUser(token);
//     return { models, user };
//     }
//     });
// server.applyMiddleware({ app, path: '/api' });
// app.listen({ port }, () =>
//     console.log(`GraphQL server running at http://localhost:${port}${server.graphqlPath}`)
// );


// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
// const jwt = require("jsonwebtoken");
// const depthLimit = require('graphql-depth-limit');

// const typeDefs = require('./schema');
// const resolvers = require('./resolver');
// const db = require('./db');
// const models = require('./models');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 4001;
// const DB_HOST = process.env.DB_HOST;

// console.log(typeDefs);
// db.connect(DB_HOST);

// const getUser  = token => {
//     if (token) {
//         try {
//             return jwt.verify(token, process.env.JWT_SECRET);
//         } catch (err) {
//             throw new Error('Session invalid');
//         }
//     }
// };

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     validationRules: [depthLimit(5)], // Only using depth limit
//     context: async ({ req }) => {
//         const token = req.headers.authorization;
//         const user = await getUser (token);
//         return { models, user };
//     }
// });

// server.applyMiddleware({ app, path: '/api' });

// app.listen({ port }, () =>
//     console.log(`GraphQL server running at http://localhost:${port}${server.graphqlPath}`)
// );
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const jwt = require("jsonwebtoken");
const depthLimit = require('graphql-depth-limit');

const typeDefs = require('./schema');
const resolvers = require('./resolver');
const db = require('./db');
const models = require('./models');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;
const DB_HOST = process.env.DB_HOST;

console.log(typeDefs);
db.connect(DB_HOST);

const getUser  = token => {
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
    validationRules: [depthLimit(5)], 
    context: async ({ req }) => {
        const token = req.headers.authorization;
        const user = await getUser (token);
        return { models, user };
    }
});

// Create an async function to start the server
const startServer = async () => {
    await server.start(); // Await the server start
    server.applyMiddleware({ app, path: '/api' }); 

    app.listen({ port }, () =>
        console.log(`GraphQL server running at http://localhost:${port}${server.graphqlPath}`)
    );
};

// Call the startServer function
startServer().catch(err => {
    console.error('Error starting server:', err);
});