import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect, useState } from "react";

import '../CSS/Activities.css';


import ActivityList from "./ActivityList";

const Activities = () => {

  const [activities, setActivities] = useState(null)

  const sD = 'sd';
  const District = localStorage.getItem(sD);

  useEffect(() => {
    fetch('http://localhost:3900/api/client')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setActivities(data);
      })
  }, [])

  return (
    <div className="activity-list">
      <div id="SlideBG">
        <Navbar />
        {activities && <ActivityList activities={activities.filter(activity => activity.district === District && activity.serviceType==="Activity Provider")} />}
        <Footer />
      </div>
       
    </div>
  );
}
export default Activities;
