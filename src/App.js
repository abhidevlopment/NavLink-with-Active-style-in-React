import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavStyle from "./components/NavLink";
import About from "./components/About";
import Home from "./components/Home";

// const User = ({ match }) => {
//   return <h1>Welcome{match.params.username}</h1>;
// };

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavStyle />
          </div>
          <div>
            <Switch>
              {/* <Route
            path="/"
            exact
            render={() => {
              return <h1>Welcom Home!!!!!!</h1>;
            }}
          /> */}

              {/* <Route path="/user/:username" exact strict Component={User} /> */}
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
