import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Video from "./VideoComponent";
import Chating from "./ChatComponent";
import Gesture from "./GestureVideoComponent";
import Signup from "./SignupComponent";
import Doctor from "./DoctorComponent";
import Auth from "./AuthComponent";
import MentalScreening from "./mentalScreeningComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/temp" component={Auth} />
                    <Route path="/video" component={Video} />
                    <Route path="/chat" component={Chating} />
                    <Route path="/gesture" component={Gesture} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/doctors" component={Doctor} />
                    <Route
                        path="/mentalscreening"
                        component={MentalScreening}
                    />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;
