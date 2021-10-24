import { Link } from 'react-router-dom';
import '../CSS/Sites.css';
const SiteList = ({ sites }) => {
    return (
        <div className="site-list">
            {sites.map(site => (
               <div className="sblock" key={site._id}>
                   <Link to={`/sites/${site._id}`}>
                   <h2>{site.name}</h2>
                   </Link>
               </div>     
            ))}
        </div>
    );
}

export default SiteList;