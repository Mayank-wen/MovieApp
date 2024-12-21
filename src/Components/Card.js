import React from "react";
import styled from "styled-components";
import Switch from "./Switch"; 

const Card = ({ imgsrc, title, description, genre, releaseDate, rating }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__front">
          <img src={imgsrc} alt={title} />
        </div>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
          <p className="card__genre">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="card__release-date">
            <strong>Release Date:</strong> {releaseDate}
          </p>
          <p className="card__rating">⭐ {rating}</p>
          <div className="card__switch">
            <Switch />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 210px;
    height: 320px; /* Adjust height to accommodate the Switch */
    border-radius: 10px;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.6s ease;
  }

  .card__front {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .card__front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(87, 85, 85, 0.8);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }

  .card__description {
    margin-top: 10px;
    font-size: 14px;
    color: black;
    line-height: 1.6;
  }

  .card__genre,
  .card__release-date {
    margin-top: 10px;
    font-size: 14px;
    color: white;
  }

  .card__rating {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #ff9900;
  }

  .card__switch {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

export default Card;
