import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="card w-25  mx-auto mt-5 ">
        <div className={"card-body bg-light m-auto"}>
          <img src={user.picture} alt={user.name} />
          <h2>Hello, {user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
