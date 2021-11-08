import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import AppNavigator from "./navigator";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillUnmount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Topbar />
          <AppNavigator />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
