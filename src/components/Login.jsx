import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState()

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };

    return (
    <div>
        <Header />
        <div className="absolute">
          <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f0b42cac-9ced-425f-8677-777eadbdbe2f/web/IN-en-20261005-TRIFECTA-perspective_14c6dcd8-c058-4841-a0e5-1d0d70b35836_large.jpg"
          alt="movies-bg" />
        </div>

        <form className="w-3/12 absolute bg-black p-8 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-md">
          <h1 className="text-white font-bold text-3xl my-3">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>

          {
          !isSignInForm && 
          (<input className="p-3 my-3 w-full bg-zinc-600" type="text" placeholder="Full Name" />)
          }

          <input className="p-3 my-3 w-full bg-zinc-600" type="text" placeholder="Email Address" />

          <input className="p-3 my-3 w-full bg-zinc-600" type="password" placeholder="Passowrd" />

          <button className="p-3 my-7 w-full text-white bg-red-700 font-bold rounded-lg">
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>

          <p onClick={toggleSignInForm} className="text-white cursor-pointer">
            {isSignInForm ? "New to Netflix? sign Up Now" : "Aldready registered! Sign In Now"}
          </p>
        </form> 
    </div>

  )
}

export default Login;