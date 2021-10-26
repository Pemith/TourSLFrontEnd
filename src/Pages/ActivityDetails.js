import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../CSS/ActivityDetails.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const ActivityDetails = () => {
  const { id } = useParams();
  const [packages, setPackages] = useState(null); 
  const [clients, setClients] = useState(null);
  var selectedClient = null;
  var clientPackages = null;
  useEffect(() => {
    fetch('http://localhost:3900/api/packageupload',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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

  useEffect(() => {
    fetch('http://localhost:3900/api/client',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
      setClients(data);
      console.log(data)
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])

  console.log(packages);
  console.log(clients);

  try{
    clientPackages = packages.filter(packs => packs.client._id === id);
    console.log(clientPackages);
  }catch(e){
    console.log(e.message);
  }

  try{
    selectedClient = clients.filter(client => client._id === id);
    console.log(selectedClient);
  }catch(e){
    console.log(e.message);
  }

  return(
    console.log(clientPackages),
    console.log(selectedClient),
      <div className="activity-details">
        {console.log(packages)}
          <Navbar/>
          <article>
            <div className="a1block">
              {selectedClient && selectedClient.map(client => {
                return <div>
                  <h1>{client.companyName}<br /></h1><h2>{client.address}<br /></h2>
                  <h3>Contact Number: { client.contactNumber }<br /><br /></h3>
                </div> 
              }

              )}
              {clientPackages && clientPackages.map(pack =>{
                return <div  key={pack._id}>
                          <h4>{ pack.packageName}</h4>
                          <p>Per Person LKR {pack.price}/=<br /><br /></p>
                      </div>
              }
              )}
            </div>
            
          </article>

          <Footer />
      </div>
      
  );
}

export default ActivityDetails;