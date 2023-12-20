import Hiresboxs from '../Hiresbox/Hiresbox.css';


const Hiresbox = () => {
    return (
        <div>
             <div className='Hiresboxmain'>
            <h1 className='want'> please Request  if you Want!!!</h1>
           <div className='place'>
        <span className='Address'>Name:</span>  <input type='text'placeholder='Enter your Name' name="name"required></input><br/>
        <span className='Address'>Address</span>    <input type='text'placeholder='Enter your Address' name="address"required></input><br/>
        <span className='Address'>No:Vehicles</span>   <input type='text'placeholder='Enter number of vehciles' name="name"required></input><br/>

        <span className='Address'>Hire Date:</span>   <input type='text'placeholder='hire Date' name="name"required></input><br/>
        <span className='Address'>Expire Date:</span>   <input type='text'placeholder='Expire Date' name="name"required></input><br/>
        <span className='Address' >Amount:</span>   <input type='text'placeholder=' Enter Amount' name="name"required></input><br/>
        <span className='Address'>Transcation Number:</span>   <input type='text'placeholder='Transcation number' name="name"required></input><br/>
       <input className='request' type="submit"value="Request"></input>
       </div>
       </div>
        </div>
    );
};

export default Hiresbox;