const Query = require('./query');
const Mutation = require('./mutation');
const Movie = require('./movies');
const User = require('./user');
const { GraphQLDateTime } = require('graphql-iso-date');
module.exports = {
Query,
Mutation,
Movie,
User,
DateTime: GraphQLDateTime
};
