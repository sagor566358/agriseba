
import './Footer.css'
import logo4 from '../Foter/facebook.png';
import logo5 from '../Foter/instagram.png';
import logo6 from '../Foter/linkedin.png';
import logo7 from '../Foter/twitter.png';
const Footer = () => {
    return (
        <div>

<footer className="footer">
     <div className="container">
       <div className="row">
         <div className="footer-col">
           <h4>company</h4>
           <ul>
             <li><a href="#">about us</a></li>
             <li><a href="#">our services</a></li>
             <li><a href="#">privacy policy</a></li>
             <li><a href="#">affiliate program</a></li>
           </ul>
         </div>
         <div className="footer-col">
           <h4>get help</h4>
           <ul>
             <li><a href="#">FAQ</a></li>
             <li><a href="#">shipping</a></li>
             <li><a href="#">returns</a></li>
             <li><a href="#">order status</a></li>
             <li><a href="#">payment options</a></li>
           </ul>
         </div>
         <div className="footer-col">
           <h4>online shop</h4>
           <ul>
             <li><a href="#">watch</a></li>
             <li><a href="#">bag</a></li>
             <li><a href="#">shoes</a></li>
             <li><a href="#">dress</a></li>
           </ul>
         </div>
         <div className="footer-col">
           <h4>follow us</h4>
           <div className="social-links">
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>

           </div>
         </div>
       </div>
     </div>
     <br/>
     <p className='copy'>sagor&copy;copyright</p>
  </footer>

         
            </div>
    );
};

export default Footer;