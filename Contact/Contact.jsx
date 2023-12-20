
import  '../Contact/Contact.css'
import Footer from '../Page/Home/Foter/Footer';

const Contact = () => {
    return (
        <div>
        <div className='mainpart'>
           <section className='value'>
            <div className='Contacts'>
                <h2 className='red'>Contact Us</h2>
                <p className='department'>  The Department of Primary Industries and Regional Development (DPIRD) has offices and facilities situated throughout the state. We welcome enquiries and feedback and endeavour to make our information and services as accessible as possible.</p>

            </div>
            <div className='pppp'>
            <div className='Container'>
                <div>
                    <h2>Address</h2>  
                    <p>Jhikorgacha ,jashore</p>
                </div>
                <div>
                <h2>phone number</h2>  
                <p>01797566358</p>
                </div>
                <div>
                <h2>Email</h2>  
                <p>mehedisagor2001@gmail.com</p>
                </div>

            </div>
            <div className='inputpart'>
                <h2>Send Message</h2>
               <input type="text"placeholder='Enter your name' name="name"></input><br/><br/>
               <input type="text"placeholder='Enter your Email' name="email"></input><br/><br/>
               <input type="text"placeholder='Enter your message' name="message"></input><br/><br/>
               <input type='Submit'value="submit"></input>
            </div>
            </div>

           </section>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Contact;

                