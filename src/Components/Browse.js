import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Netflix_Logo_PMS, Usericon } from "../utils/constants";
import { useEffect } from "react";
import { url, options } from "../utils/constants";

const Browse = () => {
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(url, options);
      const json = await data.json();
      console.log(json);
    };
    getNowPlayingMovies();
  }, []);
  return (
    <div className="absolute flex bg-gradient-to-b from-black px-8 py-3 justify-between w-screen">
      <img className="w-48" src={Netflix_Logo_PMS} alt="logo" />
      <div className="flex">
        <img alt="user-icon" className="w-20 p-2" src={Usericon} />
        <button
          className="font-bold text-white m-2 hover:text-gray-400"
          onClick={() => {
            signOut(auth)
              .then(() => {
                console.log("Sign Out");
              })
              .catch((error) => {});
          }}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Browse;
