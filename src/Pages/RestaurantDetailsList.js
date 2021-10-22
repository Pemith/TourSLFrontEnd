import {Link} from 'react-router-dom';
import '../CSS/Activities.css';


const RestaurantDetailsList = ({resmenu}) => {
    return ( 
        <div className="restaurantmain">
            {resmenu.map(menu =>(
                <div className="block" key={menu._id}>
                    <Link to={`/menuupload/${menu._id}`}>
                        <h2>{menu.menuItem}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default RestaurantDetailsList;