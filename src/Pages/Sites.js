import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect, useState } from "react";

import '../CSS/Sites.css';


import SiteList from "./SiteList";

const Sites = () => {
  const [sites, setSites] = useState(null)

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
        {sites && <SiteList sites={sites} />}
        <Footer />
    </div>
  );
}
export default Sites;
