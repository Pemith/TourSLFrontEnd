import Welcome from "./Pages/Welcome";
import TS from "./Pages/TS";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import Reception from "./Pages/Reception";

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
          <Route exact path="/reception">
            <Reception/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
