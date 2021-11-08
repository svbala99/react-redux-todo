import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import PhotosScreen from "./screens/Photos";

class AppNavigator extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/photos" component={PhotosScreen} />
      </Switch>
    );
  }
}

export default AppNavigator;
