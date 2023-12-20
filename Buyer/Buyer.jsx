import '../Buyer/Buyer.css'

const Buyer = () => {
    const handleaddfarmer=(event)=>{
    event.preventDefault();
  const form=event.target;
   const name=form.name.value;
   const product_name=form.product_name.value;
   const amount=form.amount.value;
   const price=form.price.value;
   const users={name,product_name,amount,price};
   console.log(users);
   
   fetch('http://localhost:5000/users',{
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(users)
})
.then(res=>res.json())
.then(data => {
if(data.insertedId){
    alert("Student added successfully")
}
})

    }
    return (
        <div>
            <form  onSubmit={handleaddfarmer} className="w-1/3 mx-auto">
                <div className="buyer">
                    <div className="buyermain">

                        <br/>
                        <br/>
                       <h1> please buy  product!!</h1>
                            <span className="label-text">Name:</span>
                   
                            &nbsp;&nbsp;    &nbsp;&nbsp;<input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" style={{borderRadius:'8px'}}/><br/>
                 
                 
                  
                        
                            <span className="label-text">product name:</span>
                    
                        
                            <input type="text" name="product_name" placeholder="Enter your Product name" className="input input-bordered w-full" style={{borderRadius:'8px'}} /><br/>
          
                    
                            <span className="label-text"> Product Amount:</span>
                   
                            <input type="text" name="amount" placeholder="Enter your Product Amount" className="input input-bordered w-full" style={{borderRadius:'8px'}} /><br/>
                      
                    
                        
                            <span className="label-text"> Product Price:</span>
                     
                      
                            <input type="text" name="price" placeholder="Enter your price" className="input input-bordered w-full" style={{borderRadius:'8px'}} /><br/>
                      
                            <input className="button" type="submit" value="Sell" />
                  
                    </div>
                </div>
               
            </form>
        </div>
    );
};

export default Buyer;