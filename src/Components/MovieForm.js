import React from 'react';
import styled from 'styled-components';

const MovieForm = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="title">Movie Title</label>
            <input type="text" id="title" name="title" required placeholder="Enter movie title" />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input type="text" id="genre" name="genre" required placeholder="Enter movie genre" />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input type="number" id="rating" name="rating" required placeholder="Enter movie rating" min="0" max="10" />
          </div>
          <div className="form-group">
            <label htmlFor="releaseDate">Release Date</label>
            <input type="date" id="releaseDate" name="releaseDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" rows={4} required placeholder="Enter movie description" />
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input,
  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group input::placeholder,
  .form-container .form-group textarea::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
`;

export default MovieForm;