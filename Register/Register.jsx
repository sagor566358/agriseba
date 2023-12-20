import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import '../Register/Register.css'
import Footer from "../Page/Home/Foter/Footer";


const Register = () => {
    const {user,   createUser}=useContext(AuthContext);

        console.log(user);
        console.log(createUser);
    
    const handleregister=(event)=>{

        event.preventDefault();
         const form=event.target;
         const name=form.name.value;
         const email=form.email.value;
         const password=form.password.value;
         console.log(name,email,password);
         createUser(email,password)
          .then(result=>{
            const loggeduser=result.user;
            console.log(loggeduser);
            form.reset("")
         })
         .catch(error=>{

            console.log(error);
         })

    }
    return (
        <div>
        <div className="registermain">
            <div className="rexxx">
            <form onSubmit={handleregister}>
                <br/>
                <br/>
                
                <h1 className="regis"><span className="rpx">p</span>lease Register!!</h1>
             <span className="ooo">name:</span>   <input type="text"name="name"placeholder="Enter your Name"required></input><br/>
             <span className="ooo">Email:</span>  <input type="email"name="email"placeholder="Enter your email"required></input><br/>
             <span className="ooo">Password:</span>   <input type="password"name="password"placeholder="Enter your password"required></input><br/>
              <h4 className="ooo">Already Have an account?</h4>
              <input className="oooo" type="submit"value="Login"></input>
            </form>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;