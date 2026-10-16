import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { MOVIES_BG, USER_LOGO } from "../utils/constants";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const dispatch = useDispatch();

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const [errorMessage, setErrorMessage] = useState(null)

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    //validate form data
    const msg = checkValidData(email.current.value, password.current.value)
    setErrorMessage(msg);
    if(msg) return;
    
    // signup/signin logic
    if(!isSignInForm){
      //signUp logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: USER_LOGO 
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
      });
    }

    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      const { uid, email, displayName, photoURL } = user;
      dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}));
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
      });
    }

  };


    return (
    <div>
        <Header />
        <div className="absolute">
          <img 
          className="h-screen object-cover md:w-screen"
          src={MOVIES_BG}
          alt="movies-bg" />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="w-3/4 md:w-3/12 absolute bg-black p-8 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-md">
          <h1 className="text-white font-bold text-3xl my-3">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>

          {
          !isSignInForm && 
          (<input ref={name}
            className="p-3 my-3 w-full bg-zinc-600" type="text" placeholder="Full Name" />)
          }

          <input ref={email} className="p-3 my-3 w-full bg-zinc-600" type="text" placeholder="Email Address" />

          <input ref={password} className="p-3 my-3 w-full bg-zinc-600" type="password" placeholder="Password" />

          <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
          <button 
            onClick={handleBtnClick}
            className="p-3 my-7 w-full text-white bg-red-700 font-bold rounded-lg hover:opacity-85">
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