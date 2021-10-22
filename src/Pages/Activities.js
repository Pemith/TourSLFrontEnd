import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect, useState } from "react";
// import BackgroundSlideShow from "react-background-slideshow";
// import image1 from '../Images/activity1.jpg';
// import image2 from '../Images/activity2.jpg';
// import image3 from '../Images/activity3.jpg';
// import image4 from '../Images/activity4.jpg';
// import image5 from '../Images/activity5.jpg';
// import image6 from '../Images/activity6.jpg';
// import image7 from '../Images/activity7.jpg';
// import image8 from '../Images/activity8.jpg';
// import image9 from '../Images/activity9.jpg';

import '../CSS/Activities.css';


import ActivityList from "./ActivityList";

const Activities = () => {
  const [activities, setActivities] = useState(null);
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
        <Navbar />
        {activities && <ActivityList 
          activities={activities.filter(
            activity => activity.district === District
            && activity.serviceType==="Activity"
          )} />}
        <Footer />
    </div>
  );
}
export default Activities;
