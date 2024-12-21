import React from "react";
import { FaPlay } from "react-icons/fa"; // Import play icon
import "../css/CW.css";

const ContinueWatching = () => {
  const movies = [
    {
      title: "Chernobyl",
      episode: "Episode 3",
      image: "https://m.media-amazon.com/images/S/pv-target-images/797b77fc37ec3c334a1db261c2b1052e3992dbf1b3277afe7a975838e0df27c0.jpg",
    },
    {
      title: "Snowpiercer",
      episode: "Episode 7",
      image: "https://images.cds.amcn.com/amcn/tve/Snowpiercer_S4_Web_Desktop_Mobile_Swimlane_1280x720.jpg",
    },
    {
      title: "The Platform",
      episode: "55min 12sec",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYjt6nKXl5Gr5lLE9BjIi5twUQ18Ue3SjDg&s",
    },
  ];

  return (
    <div className="continue-watching">
      <h3>Popular</h3>
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img src={movie.image} alt={movie.title} />
          <div className="movie-details">
            <p>{movie.title}</p>
            <p>{movie.episode}</p>
          </div>
          <FaPlay className="play-icon" /> 
        </div>
      ))}
    </div>
  );
};

export default ContinueWatching;
