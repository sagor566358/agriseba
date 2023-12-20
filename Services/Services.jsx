
import { Link } from 'react-router-dom';
import '../Services/services.css'
const Services = () => {
    return (
        <div className="section">
        <div className="title">
            <h1>Our Services</h1>
        </div>
        <div className="services">
            <div className="card">
                <div className="icon">
                    <i className="fas fa-calendar"></i>
                </div>
                <h2>Planning</h2>
                <p> Its my pleasure to present you the Bangladesh Strategic Plan for Agricultural and Rural
Statistics-SPARS that was approved by Ministry of Planning on 27-07-2017.</p>
                <Link to="/plan"><button className='button'>Read more</button></Link>
            </div>
            <div className="card">
                <div className="icon">
                    <i className="fas fa-wrench"></i>
                </div>
                <h2>Renovation</h2>
                <p>  Vehicle renovation, commonly referred to as automotive restoration, involves the process of restoring a vehicle to its original condition or improving its overall appearance, performance, and functionality. </p>

                <Link to="/renovation"><button className='button'>Read more</button></Link>
            </div>
            <div className="card">
                <div className="icon">
                    <i className="fas fa-handshake"></i>
                </div>
                <h2>Support</h2>
                <p> Agricultural support is defined as the annual monetary value of gross transfers to agriculture from consumers and taxpayers arising from government policies that support agriculture, regardless of their objectives and economic impacts. </p>
                <Link to="/support"><button className='button'>Read more</button></Link>
            </div>
        </div>
    </div>
            
    );
};

export default Services;