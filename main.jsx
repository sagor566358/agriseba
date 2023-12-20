import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Layout/Main/Main.jsx';
import About from './Page/About/About.jsx';
import Home from './Page/Home/Home.jsx';

import Contact from './Contact/Contact.jsx';

import Services from './Services/Services.jsx';

import Homepage from './Page/Home1/Homepage.jsx';
import Buyer from './Buyer/Buyer.jsx';
import Seller from './Seller/Seller.jsx';
import LogIn from './LogIN/LogIn.jsx';
import AuthProvider from './AuthProvider.jsx';
import Register from './Register/Register.jsx';
import Payment from './Payment/Payment.jsx';
import Paymentbox from '../src/Paymentbox/Paymentbox.jsx'
import Hiresbox from './Hiresbox/Hiresbox.jsx';
import PrivateRoute from './Privateroute/Privateroute.jsx';
import Plan from './Plan/Plan.jsx';
import Renovation from './Renovation/Renovation.jsx';
import Support from './Support/Support.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
       path:'/homepage',
       element:<PrivateRoute><Homepage></Homepage></PrivateRoute>

      },
      {
        path: '/home',
        element:<PrivateRoute><Home></Home>,</PrivateRoute>, 
        loader:()=>fetch('../public/agri.json')
      },
    
      {
        path: '/about',
        element: <About></About>
      },
  
    {
    path:'/Services',
    element:<Services></Services>
    }
    ,  {
      path:'/contact',
      element:<Contact></Contact>
  
      },{

        path:"/login",
        element: <LogIn></LogIn>
      }
    ]
  },
  {

    path:"/buyer",
    element:<Buyer></Buyer>
  },{

    path:"/seller",
    element:<Seller></Seller>,
 loader:()=>fetch('http://localhost:5000/users')
  ,
    
  },
  {
    path:"/register",
    element:<Register></Register>
  },{

    path:"/payment",
    element:<Payment></Payment>
  },{

    path:"/paymentbox",
    element:<Paymentbox></Paymentbox>,
  },{

    path:"/hiresbox",
    element:<Hiresbox></Hiresbox>
  },
  {
    path:"/plan",
    element:<Plan></Plan>
  },
  {
    path:"/renovation",
    element:<Renovation></Renovation>
  },{

    path:"/support",
    element:<Support></Support>
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthProvider>
)
