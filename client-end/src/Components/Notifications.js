import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContest";

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div
                    className="py-3"
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <h1 className="quick" style={{ fontSize: "25px" }}>
                        {call.name} is calling:
                    </h1>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={answerCall}
                    >
                        <span className="quick" style={{ fontSize: "15px" }}>
                            Answer
                        </span>
                    </Button>
                </div>
            )}
        </>
    );
};

export default Notifications;
