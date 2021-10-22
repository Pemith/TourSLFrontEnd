import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../CSS/SiteDetails.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const SiteDetails = () => {
  const { id } = useParams();
  const [site, setSite] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3900/api/site/'+id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSite(data);
      })
  }, [])

  return (
    <div className="site-details">
        <Navbar />
        {site && (
            <article>
                <h1>{ site.name }<br/><br/></h1>
                <h2>District</h2>
                <p>{ site.district }<br/><br/></p>
                <h2>Site Type</h2>
                <p>{ site.siteType }<br/><br/></p>
                <h2>Open Hrs</h2>
                <p>{ site.openHrs }<br/><br/></p>
                <h2>Description</h2>
                <p>{ site.description }<br/><br/></p>
            </article>
        )}
        <Footer />
    </div>
  );
}
 
export default SiteDetails;