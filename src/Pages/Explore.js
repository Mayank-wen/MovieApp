import React, { useEffect } from "react";
import Header  from "../Components/Header";
const Explore = () => {
    useEffect(() => {
    document.title = "Explore";
  }, []);
  return <>
    <Header />
    <h2>Explore Page</h2>
  </>
};

export default Explore;
