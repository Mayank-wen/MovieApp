import React, { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
    document.title = "Profile";
  }, []);
  return <h2>Profile Page</h2>;
};

export default Profile;
