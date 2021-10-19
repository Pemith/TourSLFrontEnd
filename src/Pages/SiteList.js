import '../CSS/Sites.css';
const SiteList = ({ sites }) => {
    return (
        <div className="site-list">
            {sites.map(site => (
               <div className="sblock" key={site._id}>
                   <h2>{site.name}</h2>
               </div>     
            ))}
        </div>
    );
}

export default SiteList;