import { Link } from 'react-router-dom';
import '../CSS/Activities.css';
const ActivityList = ({ activities }) => {
    return (
        <div className="activity-list">
            {activities.map(activity => (
               <div className="ablock" key={activity._id}>
                   <Link to={`/activities/${activity._id}`}>
                   <h2>{activity.companyName}</h2>
                   </Link>
               </div>     
            ))}
        </div>
    );
}

export default ActivityList;