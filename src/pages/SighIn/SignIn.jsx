import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signinLottieData from "../../assets/lottie/signin.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import axios from "axios";

const SignIn = () => {

const {signInUser} = useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()
const from = location.state || '/'

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
    .then(result => {
        console.log(result)
      //   const user = {email: result.user.email}
      // axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
      // .then(data => {
      //   console.log(data.data)
      // })

      navigate(from)
    })
    .catch(error => {
        console.log(error.message)
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={signinLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
              <SocialLogin></SocialLogin>
            </fieldset>
            <p>You have no account, Please <Link className="text-blue-500" to='/register'>Register</Link></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignIn;
