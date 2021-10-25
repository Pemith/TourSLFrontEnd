import {Link} from 'react-router-dom';
import '../CSS/Restaurants.css';

const RestaurantList = ({ restaurants }) => {
    return (
        <div className="restaurant-list">
            {restaurants.map(restaurant => (
               <div className="rblock" key={restaurant._id}>
                    <Link to={`/menu/${restaurant._id}`}>
                        <h2>{restaurant.companyName}</h2>
                    </Link>                     
               </div>     
            ))}
        </div>
    );
}

export default RestaurantList;