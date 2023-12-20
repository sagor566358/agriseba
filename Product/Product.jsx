
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const Products=useLoaderData();
    console.log(Products);
    return (
        <div className='shop-container'>
           
           <div className='product-container'>
            <h2>Order page{Products.length}</h2>
           </div>
           <div className='cart-container'>
            <Cart cart={[]}></Cart>
            <h2>Order Summary</h2>
            <h3>Selected Items:</h3>
            <h3>Total Price:</h3>
            <h3>Shopping:</h3>
            <h4>Grand Total:</h4>
            </div>
        </div>
      
    );
};

export default Product;