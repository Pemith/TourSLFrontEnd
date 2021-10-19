import '../CSS/Activities.css';
const RestaurantList = ({ restaurants }) => {
    return (
        <div className="activity-list">
            {restaurants.map(restaurant => (
               <div className="block" key={restaurant._id}>
                   <h2>{restaurant.activityType}</h2>
               </div>     
            ))}
        </div>
    );
}

export default RestaurantList;