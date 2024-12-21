import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useApolloClient, gql } from "@apollo/client";

const BButton = ({ isLoggedIn }) => {
  const client = useApolloClient();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    client.resetStore();
    client.writeQuery({
      query: gql`
        {
          isLoggedIn @client
        }
      `,
      data: { isLoggedIn: false },
    });
    // Redirect the user to the home page
    navigate("/");
  };

  return (
    <StyledWrapper>
      {isLoggedIn ? (
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="btn">
          Login
        </Link>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    font-size: 1.2rem;
    padding: 10px 20px;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    text-decoration: none;
    margin-bottom: 200px;
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }
`;

export default BButton;
