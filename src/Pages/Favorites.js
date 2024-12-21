import React, { useEffect } from "react";
import Header from "../Components/Header";
const Favourites = () => {
  useEffect(() => {
    document.title = "Favourites";
  }, [])
  return <><Header/><h2>Favourites Page</h2></>;
 };

export default Favourites;
