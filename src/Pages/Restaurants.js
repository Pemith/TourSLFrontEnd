import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect, useState } from "react";

import '../CSS/Activities.css';


import RestaurantList from "./RestaurantList";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3900/api/restaurant')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setRestaurants(data);
      })
  }, [])

  return (
    <div className="restaurant-list">
        <Navbar />
        {restaurants && <RestaurantList restaurants={restaurants} />}
        <Footer />
    </div>
  );
}
export default Restaurants;
