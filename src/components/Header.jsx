import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOutBtn = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  };

  const onClickExpandBtn = () => {
    //expand btn logic
  }

  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img 
        className="w-40"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg" 
        alt="netflix-logo" />
        
        {user && (
          <div className="flex">
          <img className="w-12 my-2 p-1"
          src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"}
          alt="user-logo" />
          <h3 className="p-1 mr-2 my-3 font-bold">{user?.displayName}</h3>

          <p onClick={onClickExpandBtn}
          className="text-white my-4">▼</p>

          <button 
          onClick={handleSignOutBtn}
          className="bg-red-600 font-bold text-white h-8 my-4 px-2 rounded-lg">Sign Out</button>
        </div>
        )}
        
    </div>
  )
}

export default Header;