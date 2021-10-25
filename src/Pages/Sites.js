import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
import { useEffect, useState } from "react";

import '../CSS/Sites.css';


import SiteList from "./SiteList";

const Sites = () => {
  const [sites, setSites] = useState(null)
  const sD = 'sd';
  const District = localStorage.getItem(sD);

  useEffect(() => {
    fetch('http://localhost:3900/api/site')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSites(data);
      })
  }, [])

  return (
    <div className="site-list">
        <Navbar />
        <div id="SlideBG">
        {sites && <SiteList sites={sites.filter(site => site.district === District)} />}
        </div>
        {/* <Footer /> */}
    </div>
  );
}
export default Sites;
