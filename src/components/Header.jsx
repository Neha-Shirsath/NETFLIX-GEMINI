import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOutBtn = () =>{
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error")
    });
  };


  useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                  const {uid, email, displayName, photoURL} = user;
                  dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                  navigate("/browse");
              } else {
                  dispatch(removeUser());
                  navigate("/");
              }
          });
          //unsubscribe when component unmounts
          return () => unsubscribe();
      }, [])
  

  // const onClickExpandBtn = () => {
  //   //expand btn logic
  // }

  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img 
        className="w-40"
        src={ NETFLIX_LOGO } 
        alt="netflix-logo" />
        
        {user && (
          <div className="flex">
          <img className="w-12 my-2 p-1"
          src={user?.photoURL || USER_LOGO }
          alt="user-logo" />
          <h3 className="p-1 mr-2 my-3 font-bold text-white">{user?.displayName}</h3>

          {/* <p onClick={onClickExpandBtn}
          className="text-white my-4">▼</p> */}

          <button 
          onClick={handleSignOutBtn}
          className="bg-red-600 font-bold text-white h-8 my-4 px-2 rounded-lg">Sign Out</button>
        </div>
        )}
        
    </div>
  )
}

export default Header;