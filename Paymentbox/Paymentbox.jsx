
import '../Payment/payment.css'
import Payments from  '../Payment/payment.jpg'
import Masters from '../Payment/master.png'
const Payment = () => {
    return (
    <div className='tanhamain'>
          <div className="containers">
	
			<h1 className='tanha'>Please Payment!!</h1>
			<form>
				
		<span className='sdp'>Full name:</span>	<input type="text" name="name" placeholder="Enter name"></input><br/>
			
        <span className='sdp'> Email:</span>   <input type="text" name="" placeholder="Enter email"></input><br/>

				
        <span className='sdp'>  Address:</span><input type="text" name="" placeholder="Enter address"></input><br/>
				
				
        <span className='sdp'>City:  </span>	<input type="text" name="" placeholder="Enter City"></input><br/>
				
					<label>
						<span className='sdp'> District: </span>
						<select>
							<option>Choose State..</option>
							<option>Dhaka</option>
							<option>Khulna</option>
							<option>Rongpur</option>
							<option>Rajshahi</option>
                            <option>Sylhet</option>
                            <option>Borishal</option>
                            <option>chattogram</option>
                            <option>Mymensingh</option>
						</select>
					</label><br/>
						<label>
              <span className='sdp'> Zip code </span>
						<input type="number" name="" placeholder="Zip code"></input>
					</label>

		
				<h1> <span className='sdp'>Accepted Card</span> </h1><br/>
                <div className='mmmm'>
                <img  className="payments"src={Payments}></img>
                <img  className="masters"src={Masters} alt="" />

                </div>
				
				
				<br/>

                <span className='sdp'> 
				Credit card number </span>
			<input type="text" name="" placeholder="Enter card number"></input><br/>
				
						
				
              
                <input className='proces' type='submit'value="Proceed to checkout"></input>
			</form>
			
</div>
</div>
       
    );
};

export default Payment;