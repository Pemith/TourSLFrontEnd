import {Link} from 'react-router-dom';
import '../CSS/Activities.css';

const RestaurantList = ({ restaurants }) => {
    return (
        <div className="restaurantmain">
            {restaurants.map(restaurant => (
               <div className="block" key={restaurant._id}>
                    <Link to={`/menuupload/${restaurant._id}`}>
                        <h2>{restaurant.companyName}</h2>
                    </Link>                     
               </div>     
            ))}
        </div>
    );
}

export default RestaurantList;