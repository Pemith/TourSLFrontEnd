import Welcome from "./Pages/Welcome";
import TS from "./Pages/TS";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Reception from "./Pages/Reception";
import ARS from './Pages/ARS';
import DistrictName from "./Pages/DistrictName";
import Activities from "./Pages/Activities";
import Leisure from "./Pages/Leisure";
import Lighthouse from "./Pages/LightHouse";
import ABCLeisure from "./Pages/ABCLeisure";
import TastyRes from "./Pages/TastyRes";
import ABCPackagename from "./Pages/ABCPackagename";
import MenuUpload from "./Pages/MenuUpload";


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
          <Route exact path="/ars">
            <ARS/>
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
          <Route exact path='/tastyres'>
          <TastyRes/>
          </Route>
          <Route exact path='/abcleisure'> 
          <ABCLeisure/>
          </Route>
          <Route exact path='/ABCPackagename'>
            <ABCPackagename/>
          </Route>
          <Route exact path='/menuupload'>
            <MenuUpload/>
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
