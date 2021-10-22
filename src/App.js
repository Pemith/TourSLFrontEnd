import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import RegisterLogin from "./Pages/RegisterLogin";
import Reception from "./Pages/Reception";
import DistrictName from "./Pages/DistrictName";
import Activities from "./Pages/Activities";
import SiteDetails from "./Pages/SiteDetails";
import ActivityDetails from "./Pages/ActivityDetails";
import RestaurantDetails from "./Pages/RestaurantDetails";
import Lighthouse from "./Pages/LightHouse";
import ClientLogin from "./Pages/ClientLogin";
import ClientDashboard from "./Pages/ClientDashboard";
import Sregistration from "./Pages/Sregistration";
import ActivityProvider from "./Pages/ActivityProviderRegistration";
// import RestaurantRegistration from "./Pages/RestaurantRegistration";
import ABCPackagename from "./Pages/ABCPackagename";
import MenuUpload from "./Pages/MenuUpload";
import Profile from "./Pages/Profile";
import  Sites from "./Pages/Sites";
import Restaurants from "./Pages/Restaurants";
import LegalDocuments from "./Pages/LegalDocuments";

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <Router>
      <ToastContainer/>
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
          <Route exact path="/sites/:id">
            <SiteDetails/>
          </Route>
          <Route exact path="/activities/:id">
            <ActivityDetails/>
          </Route>
          <Route exact path="/menu/:id">
            <RestaurantDetails/>
          </Route>
          <Route exact path="/lighthouse">
            <Lighthouse/>
          </Route>
          <Route exact path="/login">
            <ClientLogin/>
          </Route>
          <Route exact path="/clientdashboard">
            <ClientDashboard/>
          </Route>
          <Route exact path="/sreg">
            <Sregistration/>
          </Route>
          <Route exact path="/apreg">
            <ActivityProvider/>
          </Route>
          <Route exact path="/legal">
            <LegalDocuments/>
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
          <Route exact path='/sites'>
            <Sites/>
          </Route>
          <Route exact path='/restaurants'>
            <Restaurants/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
