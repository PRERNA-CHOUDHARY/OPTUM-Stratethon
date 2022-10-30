import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import { ContextProvider } from "../SocketContest";

const UseStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        border: "2px solid black",

        [theme.breakpoints.down("xs")]: {
            width: "90%",
        },
    },
    image: {
        marginLeft: "15px",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
}));

function video(props) {
    const classes = UseStyles();
    return (
        <ContextProvider>
            <div className={classes.wrapper}>
                <div className="quick vid" align="center">
                    V I D E O&nbsp;&nbsp;&nbsp;C A L L
                </div>
                <VideoPlayer />
                <Options>
                    <Notifications />
                </Options>
            </div>
        </ContextProvider>
    );
}

export default video;
