import React, { useState } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import StripeContainer from "./StripeContainer";

const socket = io.connect("http://localhost:3001");

function Chating(props) {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    return (
        <>
            <div className="d-flex">
                <div className="chat-css">
                    {!showChat ? (
                        <div>
                            <div className="joinChatContainer">
                                <h3 className="quick">Join a chat</h3>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Room ID"
                                    onChange={(event) => {
                                        setRoom(event.target.value);
                                    }}
                                />
                                <button
                                    onClick={joinRoom}
                                    className="poppins"
                                    style={{ fontWeight: "900" }}
                                >
                                    J O I N
                                </button>
                            </div>
                            <StripeContainer />
                        </div>
                    ) : (
                        <Chat socket={socket} username={username} room={room} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Chating;
