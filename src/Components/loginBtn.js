import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="my-2">
      <button className="btn btn-lg btn-primary" onClick={loginWithRedirect}>
        Log In
      </button>
    </div>
  );
};

export default LoginButton;
