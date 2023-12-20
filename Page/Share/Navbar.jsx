// import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";
import  './Nav.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
// import { AuthContext } from '../../AuthProvider';
// import { AuthContext } from 'AuthProvider';

const Navbar = () => {
    const{ user,  logOut}=useContext(AuthContext);
    const handlelogout=()=>{
        logOut()
        
        
        .then(()=>{
            console.log("logOut");

        })
        .catch(error=>{
            console.log(error);
        });
    }

    return (
    <div> 
       


        <div className='nav'>
    
        
        <h1 className='agrisheba'><span className='Agri'>A</span><span className='sheba'>grisheba</span></h1>
        <div className="navbarmain">
        <Link to='/homepage'>home</Link>
            <Link to='/home' >Hires</Link>
          
             <Link to='/services'>Services</Link>
              <Link to='/contact'>Contact</Link>
             <Link to='/about' className="ml-5">About</Link>
             {
                user ? <span>{user.email}  <button onClick={handlelogout}>SignOut</button></span>
                :<Link to="/login">LogIN</Link>
            }
        </div>
        
              
             
        </div>
        
              
        
        </div>
    );
};

export default Navbar;