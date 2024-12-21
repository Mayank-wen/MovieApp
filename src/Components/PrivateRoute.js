import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return data.isLoggedIn ? (
    <Route {...rest} element={Element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
