import '../CSS/Activities.css';
const ActivityList = ({ activities }) => {
    return (
        <div className="activity-list">
            {activities.map(activity => (
               <div className="ablock" key={activity._id}>
                   <h2>{activity.companyName}</h2>
               </div>     
            ))}
        </div>
    );
}

export default ActivityList;