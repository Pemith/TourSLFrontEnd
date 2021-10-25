import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
import { useEffect, useState } from "react";

import '../CSS/Restaurants.css';


import RestaurantList from "./RestaurantList";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(null);
  const sD='sd';
  const District=localStorage.getItem(sD);

  useEffect(() => {
    fetch('http://localhost:3900/api/client')
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(data => {
        // console.log(data);
        setRestaurants(data);
      })
  }, [])

  return (
    <div className="restaurant-list">
        <Navbar />
        <div id="SlideBG">
          {restaurants && <RestaurantList 
            restaurants={restaurants.filter(
              rest => rest.district === District 
              && rest.serviceType==="Restaurant")
          } />}
        </div>
        {/* <Footer /> */}
    </div>
  );
}
export default Restaurants;
