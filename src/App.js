import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import RegisterLogin from "./Pages/RegisterLogin";
import Reception from "./Pages/Reception";
import DistrictName from "./Pages/DistrictName";
import Activities from "./Pages/Activities";
import Leisure from "./Pages/Leisure";
import Lighthouse from "./Pages/LightHouse";
import ClientLogin from "./Pages/ClientLogin";
import Sregistration from "./Pages/Sregistration";
import ActivityProvider from "./Pages/ActivityProviderRegistration";
import ABCLeisure from "./Pages/ABCLeisure";
import TastyRes from "./Pages/TastyRes";
import ABCPackagename from "./Pages/ABCPackagename";
import MenuUpload from "./Pages/MenuUpload";
import Profile from "./Pages/Profile";
import RestaurantRegistration from "./Pages/RestaurantRegistration";


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
          <Route exact path="/registerlogin">
            <RegisterLogin/>
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
          <Route exact path="/login">
            <ClientLogin/>
          </Route>
          <Route exact path="/sreg">
            <Sregistration/>
          </Route>
          <Route exact path="/apreg">
            <ActivityProvider/>
          </Route>
          <Route exact path="/resreg">
            <RestaurantRegistration/>
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
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
