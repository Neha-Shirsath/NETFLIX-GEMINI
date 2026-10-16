import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO, SUPPORTED_LANG, USER_LOGO } from "../utils/constants";
import { toggleGeminiSearchView } from "../utils/GeminiSlice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch)

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
  

  const handleGeminiSearchClick = () => {
    dispatch(toggleGeminiSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
        <img 
        className="w-20 md:w-40 md:mx-0 mx-auto"
        src={ NETFLIX_LOGO } 
        alt="netflix-logo" />
        
        {user && (
          <div className="flex py-1">

          {showGeminiSearch && (
            <select 
              onClick={handleLanguageChange}
              className="p-1 px-2 bg-zinc-800 mx-2 text-white text-md">
              {SUPPORTED_LANG.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
          )}
                      

            <button 
              onClick={handleGeminiSearchClick}
              className="bg-gradient-to-r from-pink-700 to-purple-800 text-white font-bold rounded-lg px-1 md:px-2 mr-2 text-xs md:text-sm hover:opacity-80">
              { showGeminiSearch ? "Home" : "Gemini Search ✧"}
            </button>

          <img className="w-9 h-9 p-1"
          src={user?.photoURL || USER_LOGO }
          alt="user-logo" />
          <h3 className="p-1 mr-1 font-bold text-white">{user?.displayName}</h3>

        
          <button 
          onClick={handleSignOutBtn}
          className="bg-red-600 font-bold text-xs md:text-sm text-white h-6 mt-1.5  md:pb-2 px-1 md:px-2 rounded-md hover:opacity-80">
            Sign Out
          </button>
        </div>
        )}
        
    </div>
  )
}

export default Header;