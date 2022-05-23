import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className={"ml-auto w-100"}>
      <button
        className={"btn btn-lg btn-outline-info"}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
