import { gql } from '@apollo/client';
 const GET_MOVIES = gql`
query movieFeed($cursor: String) {
  movieFeed(cursor: $cursor) {
    Movies {
      id
      title
      genre
      imgsrc
      rating
      releaseDate
      description
      favoriteCount
      createdAt
      author {
        id
        username
      }
    }
    cursor
    hasNextPage
  }
}
`;
const GET_MOVIE = gql`
 query getMovieById($id: ID!) {
  getMovieById(id: $id) {
    id
    title
    genre
    imgsrc
    rating
    releaseDate
    description
    favoriteCount
    createdAt
    author {
      id
      username
    }
  }
}
`;
 const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
 `;
 export { GET_MOVIES, GET_MOVIE, IS_LOGGED_IN };