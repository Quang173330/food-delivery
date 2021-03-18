import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login/" component={Login} />
                <Route path="/register/" component={Register} />
            </Switch>
        )
    }
}
