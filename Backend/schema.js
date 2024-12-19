// const { gql } = require('apollo-server-express')

// module.exports = gql`
//   scalar DateTime

//   type Movie {
//     id: ID!
//     title: String!
//     genre: String!
//     releaseDate: DateTime!
//     description: String
//   }

//   type User {
//     id: ID!
//     username: String!
//     email: String!
//     avatar: String
//     Movies: [Movie!]!
//     favorites: [Movie!]!
//   }
 
//   type Mutation {   
//     addMovie(title: String!, genre: String!, releaseDate: DateTime!, description: String): Movie   
//     deleteMovie(id: ID!): String
//     signUp(username: String!, email: String!, password: String!): String!
//     signIn(username: String, email: String, password: String!): String!
//     toggleFavorite(id: ID!): Movie!
//   }

//   type Query { 
//     getMovies: [Movie!]   
//     getMovieById(id: ID!): Movie
//     user(username: String!): User
//     users: [User!]!
//     me: User!
//   }
// `


const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Movie {
    id: ID!
    title: String!
    genre: String!
    releaseDate: DateTime!
    description: String
    author: User!
    favoritedBy: [User!]!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    Movies: [Movie!]!
    favorites: [Movie!]!
  }

  type Mutation {   
    addMovie(title: String!, genre: String!, releaseDate: DateTime!, description: String): Movie   
    deleteMovie(id: ID!): String
    signUp(username: String!, email: String!, password: String!): String!  
    signIn(username: String, email: String, password: String!): String!
    toggleFavorite(id: ID!): Movie!
  }

  type Query { 
    getMovies: [Movie!]   
    getMovieById(id: ID!): Movie
    user(username: String!): User
    users: [User !]!
    me: User!
    movieFeed(cursor: String): MovieFeedResponse!  # Add this line
  }

  type MovieFeedResponse {
    Movies: [Movie!]!
    cursor: String
    hasNextPage: Boolean!
  }
`
//signUp(username: String!, email: String!, password: String!): String! // User!