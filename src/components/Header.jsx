import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO, SUPPORTED_LANG, USER_LOGO } from "../utils/constants";
import { toggleGeminiSearchView } from "../utils/GeminiSlice";

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

  const handleGeminiSearchClick = () => {
    dispatch(toggleGeminiSearchView)
  }


  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img 
        className="w-40"
        src={ NETFLIX_LOGO } 
        alt="netflix-logo" />
        
        {user && (
          <div className="flex py-1">

            <select className="p-1 px-2 bg-zinc-800 mx-2 text-white text-md">
              {SUPPORTED_LANG.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
            

            <button 
              onClick={handleGeminiSearchClick}
              className="bg-gradient-to-r from-pink-700 to-purple-800 text-white font-bold rounded-lg px-2 mr-2 text-sm hover:opacity-80">
              Gemini Search ✧
            </button>

          <img className="w-9 h-9 p-1"
          src={user?.photoURL || USER_LOGO }
          alt="user-logo" />
          <h3 className="p-1 mr-1 font-bold text-white">{user?.displayName}</h3>

          {/* <p onClick={onClickExpandBtn}
          className="text-white my-4">▼</p> */}

          <button 
          onClick={handleSignOutBtn}
          className="bg-red-600 font-bold text-sm text-white h-6 mt-1.5 pb-2 px-2 rounded-lg hover:opacity-80">
            Sign Out
          </button>
        </div>
        )}
        
    </div>
  )
}

export default Header;