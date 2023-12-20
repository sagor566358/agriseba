import { Link } from 'react-router-dom';
import '../Home/Show.css'
import  logo  from '../Home/shopping-cart.png';

const Show = ({ car}) => {
    return (
        <div className='mainshow'>
            <div className='container'>
                <div className='show-main'>
                    <img src={car.image} alt="Girl in a jacket" className="show-1"></img>
                    <h2> Name: {car.name}</h2>
                    <h3>Details: {car.details}</h3>
                    <h4> Price:{car.price}</h4>
                <div className='hiresss'>
                 <Link to="/hiresbox"><button className='hire'>Hire</button></Link>   &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Paymentbox"><button className='hires'>Buy</button></Link>
                </div>

                </div>
            
          
                
            </div>
        </div>


    );
};

export default Show;