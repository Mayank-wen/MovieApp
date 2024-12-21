import React from "react";
import "../css/Suggestion.css";
import Card from "./Card"; // Assuming Card is in the same directory

const Suggestions = () => {
  const suggestions = [
    {
      title: "Chernobyl",
      image: "https://m.media-amazon.com/images/S/pv-target-images/797b77fc37ec3c334a1db261c2b1052e3992dbf1b3277afe7a975838e0df27c0.jpg",
      description: "A gripping tale of the 1986 nuclear disaster.",
      genre: "Drama",
      releaseDate: "May 6, 2019",
      rating: "9.4",
    },
    {
      title: "Joker",
      image: "https://i.abcnewsfe.com/a/301a52fd-cca0-45bd-a5df-13205eec7426/joker-2-ht-er-240722_1721678718467_hpEmbed_2x3.jpg",
      description: "A psychological thriller exploring the origins of the iconic villain.",
      genre: "Drama/Thriller",
      releaseDate: "October 4, 2019",
      rating: "9.1",
    },
    {
      title: "Dune",
      image: "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "A breathtaking science fiction epic set in a distant future.",
      genre: "Sci-Fi",
      releaseDate: "October 22, 2021",
      rating: "8.4",
    },
    {
      title: "World War Z",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9087912_p_v10_af.jpg",
      description: "A thrilling zombie apocalypse story.",
      genre: "Action/Horror",
      releaseDate: "June 21, 2013",
      rating: "7.6",
    },
    {
      title: "Grave of the Fireflies",
      image: "https://resizing.flixster.com/BFNmx3r2Yoe0AFfg-HjBNdJ_cPs=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p158931_p_v8_aa.jpg",
      description: "A heart-wrenching tale of siblings during wartime.",
      genre: "Animation/Drama",
      releaseDate: "April 16, 1988",
      rating: "9.5",
    },
  ];

  return (
    <div className="suggestions">
      <h3>You Might Like</h3>
      <div className="suggestions-grid">
        {suggestions.map((item, index) => (
          <Card
            key={index}
            imgsrc={item.image}
            title={item.title}
            description={item.description}
            genre={item.genre}
            releaseDate={item.releaseDate}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;

