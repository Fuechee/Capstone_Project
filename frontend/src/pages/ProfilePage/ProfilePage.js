import React from "react";
import useAuth from "../../hooks/useAuth";


const ProfilePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user] = useAuth();
  

  return (
    <div className="container">
      <h1>{user.username}'s Profile</h1>
      <div className="profile">
        <li>Username: {user.username}</li>
        <li>First Name: {user.first_name}</li>
        <li>Last Name: {user.last_name}</li>
        <li>Email: {user.email}</li>
      </div>
    </div>
  );
};

export default ProfilePage;
