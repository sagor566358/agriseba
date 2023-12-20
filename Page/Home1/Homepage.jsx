
import '../Home1/Homepage.css';  
import images from '../Home1/Sagor.jpg';
import { Link } from 'react-router-dom';

const Home1 = () => {
   
    
    return (
        <div className="imagesv" style={{ backgroundImage: `url(${images})` }}>
            
            <div className='homehh'>
       
           

            <div className='buyerp'>
           
                
                <Link to="/buyer"> <button className='buyerss'>Buyer</button> </Link>
                    
                  
                 

            </div>
            <div>
               

                <Link to="/seller">  <button className='sellerp'>Seller</button> </Link>
             
            </div>
            </div>
            
            
         
        </div>
    );
};

export default Home1;
