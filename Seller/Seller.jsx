import { Link, useLoaderData } from 'react-router-dom';
import '../Seller/Seller.css'
import Footer from '../Page/Home/Foter/Footer';


const User = () => {
    const users = useLoaderData();

    const handleDelete = (_id) => {
        console.log('delete', _id);

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE' // Corrected the typo here
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    };

    return (
        <div>
        <div className='sellermain'>
            <br/>
             <h1 className='buys'>Please Buy Product</h1>
             <br/>
            <div className="Sellers">
                {
                    users.map(user => (
                        <p key={user._id}>
                            <div ><span className='special'>Name: </span> <span className='ssss'>{user.name}</span> <br/>
                          <span className='special'> product_name:</span><span className='ssss'>{user.product_name}</span> <br/>
                         <span className='special'>Price:</span> <span className='ssss'>{user.price}</span>  <br/>
                          <span className='special'> Amount:</span><span className='ssss'> {user.amount}</span>
                            </div>
                            <br/>
                         
                            <button className="Deletes" onClick={() => handleDelete(user._id)}>Delete</button>
                            <Link to="/payment"> <button className='Solds'>Sold</button></Link>
                            <br/>
                           <br/>
                        </p>
                    ))
                }
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default User;
