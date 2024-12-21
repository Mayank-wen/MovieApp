import React from "react";
import { useQuery, gql } from "@apollo/client";
import BButton from "./BButton";
import "../css/Header.css";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Header = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <div className="header">
      <input type="text" placeholder="Search" className="search-input" />
      <div className="user-info">
        <BButton isLoggedIn={data?.isLoggedIn} />
      </div>
    </div>
  );
};

export default Header;
