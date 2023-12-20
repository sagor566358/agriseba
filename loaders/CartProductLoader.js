
import {getShoppingCart} from '../Fakedb/Utilities'

const CartProductLoader = async () => {
     const loadedProducts = await fetch('Vehicles.json');
      const products = await loadedProducts.json();
      
      const storedCart = getShoppingCart();
     const savedCart=[];
      
      console.log(storedCart);
      console.log(products);
      for(const id in storedCart){

       const addedProduct =products.find(pd =>pd.id ===id);
        if(addedProduct){

           const quantity=storedCart[id];
           addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
       }
     }
      
      return  savedCart;
};
  
   export default CartProductLoader;
  