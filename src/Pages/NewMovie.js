import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import MovieForm from '../components/MovieForm';

// Our new movie query
const NEW_MOVIE = gql`
  mutation addMovie(
    $title: String!
    $genre: String!
    $imgsrc: String!
    $rating: Float!
    $releaseDate: String!
    $description: String!
  ) {
    addMovie(
      title: $title
      genre: $genre
      imgsrc: $imgsrc
      rating: $rating
      releaseDate: $releaseDate
      description: $description
    ) {
      id
      title
      genre
      imgsrc
      rating
      releaseDate
      description
    }
  }
`;

const NewMovie = (props) => {
  useEffect(() => {
    document.title = 'New Movie — MovieApp';
  }, []);

  const [data, { loading, error }] = useMutation(NEW_MOVIE, {
    onCompleted: (data) => {

      props.history.push(`/movie/${data.newMovie.id}`);
    }
  });

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the movie</p>}
      <MovieForm action={data} />
    </React.Fragment>
  );
};

export default NewMovie;
