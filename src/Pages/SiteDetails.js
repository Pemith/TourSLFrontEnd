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
                <h2>Details - { site.description }</h2>
            </article>
        )}
        <Footer />
    </div>
  );
}
 
export default SiteDetails;
