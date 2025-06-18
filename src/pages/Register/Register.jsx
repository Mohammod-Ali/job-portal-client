import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  
  const {createUser} = useContext(AuthContext)

    const handleRegister= e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
       
        // password authentication


        // check authentication
        createUser(email, password)
        .then( result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      
     <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;