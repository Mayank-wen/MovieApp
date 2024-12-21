import React, { useEffect } from "react";

const MyMovies = () => {
  useEffect(() => {
    document.title = "My Movies";
  }, []);
  return <h2>My Movies</h2>;
};

export default MyMovies;
