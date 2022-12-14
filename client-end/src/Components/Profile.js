import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading || user === undefined) {
        console.log(user);
        return <div>Loading ...</div>;
    } else {
        console.log(user);
    }

    setInterval(() => {
        console.log(user);
    }, 1000);

    return (
        isAuthenticated && (
            <div style={{ backgroundColor: "black" }}>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;
