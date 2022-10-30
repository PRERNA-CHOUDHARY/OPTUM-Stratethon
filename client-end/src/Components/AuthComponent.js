import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

export default function AuthComponent() {
    const { loginWithRedirect, logout } = useAuth0();
    return (
        <div>
            Auth
            <br />
            <button onClick={() => loginWithRedirect()}>Log In</button>;
            <br />
            <button
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Log Out
            </button>
            <br />
            <Profile />
        </div>
    );
}
