import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Reception from "./Pages/Reception";
import DistrictName from "./Pages/DistrictName";
import Activities from "./Pages/Activities";
import Leisure from "./Pages/Leisure";
import Lighthouse from "./Pages/LightHouse";
import Sregistration from "./Pages/Sregistration";
import ActivityProvider from "./Pages/ActivityProviderRegistration";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/reception">
            <Reception/>
          </Route>
          <Route exact path="/districtname">
            <DistrictName/>
          </Route>
          <Route exact path="/activities">
            <Activities/>
          </Route>
          <Route exact path="/leisure">
            <Leisure/>
          </Route>
          <Route exact path="/lighthouse">
            <Lighthouse/>
          </Route>
          <Route exact path="/sreg">
            <Sregistration/>
          </Route>
          <Route exact path="/apreg">
            <ActivityProvider/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
