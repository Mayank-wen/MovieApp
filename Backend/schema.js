const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar DateTime

  type Movie {
    id: ID!
    title: String!
    genre: String!
    releaseDate: String!
    description: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    Movies: [Movies!]!
    favorites: [Movies!]!
  }

  type Mutation {   
    addMovie(title: String!, genre: String!, releaseDate: String!, description: String): Movie   
    deleteMovie(id: ID!): String
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
    toggleFavorite(id: ID!): Movie!
  }

  type Query { 
    getMovies: [Movie!]   
    getMovieById(id: ID!): Movie
    user(username: String!): User
    users: [User!]!
    me: User!
  }
`
