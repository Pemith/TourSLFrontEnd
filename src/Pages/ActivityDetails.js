import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../CSS/SiteDetails.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const ActivityDetails = () => {
  const { id } = useParams();
  const [packages, setPackages] = useState(null)
  var clientPackages = null;
  useEffect(() => {
    fetch('http://localhost:3900/api/packageupload',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      // .then(res => {
      //   return res.json();
      // })
      .then(async response => {
        try {
         const data = await response.json()
         console.log('response data?', data)
         return data;
       } catch(error) {
         console.log('Error happened here!')
         console.error(error)
       }})
      .then(data => {
        setPackages(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  console.log(packages);

  try{
    clientPackages = packages.filter(packs => packs.client._id === id);
    console.log(clientPackages);
  }catch(e){
    console.log(e.message);
  }

  return(
    console.log(clientPackages),
      <div className="site-details">
        {console.log(packages)}
          <Navbar/>
          <article>
            {clientPackages && clientPackages.map(pack =>{
              return <div key={pack._id}>
                        <h2>{ pack.packageName}</h2>
                        <p>Per Person LKR {pack.price}/=</p>
                    </div>
            }
            
            )}
          </article>

          <Footer />
      </div>
      
  );
}

export default ActivityDetails;