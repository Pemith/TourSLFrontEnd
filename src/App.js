import Welcome from "./Pages/Welcome";
import TS from "./Pages/TS";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/ts">
            <TS />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/navbar>">
            <Navbar/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
