// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Show from '../Home/Show'
import '../Home/Home.css'


const Home = () => {
    const cars = useLoaderData()
    console.log(cars);

    return (
      
     <div   className="homepart" >
     { 

        cars.map(car =>
        <Show
          key={car.id}
          car={car}
        
        ></Show>)
       
       
      }
      
        </div>
        
     
            
     
    )
    
    
};

export default Home;

