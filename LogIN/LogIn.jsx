import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import '../LogIN/Login.css'
import Footer from "../Page/Home/Foter/Footer";


const LogIn = () => {
  const {SignIn}=useContext(AuthContext);
    const loginaddhandle=(event)=>{
       event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log(user);
        form.reset("");
        SignIn(email,password)
        .then(result=>{
          const loggeduser=result.users;
          console.log(loggeduser)
        })
        .catch(error=>{

          console.log(error)
        }
          
          )
    }
    return (
      <div>
        
   <div className="loginmain">
    <br/><br/>
     <div className="inputf">

     
    <h1 className="please"><span className="ppppp">p</span>lease LogIn</h1><br/>
    <form onSubmit={loginaddhandle}>
      <span className="Email">Email:</span>  <input type="email"name="email"placeholder="Enter your email"required></input><br/>
     <span className="password">Password:</span>   <input type="password"name="password"placeholder="Enter your password"required></input><br/>
        <Link className="forgot" to="/register">Forget password?</Link><br/>
        <br/>
        <input className="submiss" type="Submit"value="LogIn"></input>
        <p className="forgot">Don't hava a acoount<Link  className="signss"to="/register">Sign Up</Link></p>

    </form>
    </div>
  </div>
  <Footer></Footer>
  </div>
 
    );
};

export default LogIn;