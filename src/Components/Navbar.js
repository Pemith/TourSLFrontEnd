import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <>
        <nav className="navbar">
            <div> <img src={require('../Images/Yaka.png')} style={{align:'left'}}/></div> 
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    <h2> Tour SL</h2>
                    <i class="fab fa-typo3" />
                </Link>
                
            </div>
            
        </nav>
        </>
     );
}
 
export default Navbar;