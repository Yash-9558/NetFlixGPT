import { useRef, useState } from "react";
import {
  checkValidateDataOnSignIn,
  checkValidateDataOnSignUp,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Background, Netflix_Logo_PMS } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");
  const confirmPassword = useRef("");

  return (
    <div>
      {/* background image */}
      <div className="absolute">
        <img
          className="h-[100vh] w-[100vw]"
          src={Background}
          alt="all-movies"
        />
      </div>
      <div className="px-32 py-2 z-10 absolute w-full h-full bg-black bg-opacity-60">
        {/* Header Image */}
        <img className="w-48" src={Netflix_Logo_PMS} alt="logo" />
        {/* Sign In Form */}
        <div className="w-5/12 mx-auto bg-black text-white p-8 my-4 rounded-lg bg-opacity-80">
          <p className="text-3xl font-bold text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full bg-gray-900 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-3 w-full bg-gray-900 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-900 rounded-lg"
          />
          {!isSignInForm && (
            <input
              ref={confirmPassword}
              type="password"
              placeholder=" Confirm Password"
              className="p-3 my-3 w-full bg-gray-900 rounded-lg"
            />
          )}
          <button
            className="p-3 my-3 bg-red-600 w-full rounded-lg"
            onClick={async () => {
              if (isSignInForm) {
                setErrorMessage(
                  checkValidateDataOnSignIn(
                    email.current.value,
                    password.current.value
                  )
                );

                if (!errorMessage) {
                  signInWithEmailAndPassword(
                    auth,
                    email.current.value,
                    password.current.value
                  )
                    .then((userCredential) => {
                      // const user = userCredential.user;
                      console.log("Sign In");
                      // console.log(user);
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErrorMessage(errorCode + " " + errorMessage);
                    });
                }
              } else {
                setErrorMessage(
                  checkValidateDataOnSignUp(
                    name.current.value,
                    email.current.value,
                    password.current.value,
                    confirmPassword.current.value
                  )
                );

                if (!errorMessage) {
                  createUserWithEmailAndPassword(
                    auth,
                    email.current.value,
                    password.current.value
                  )
                    .then((userCredential) => {
                      // const user = userCredential.user;
                      console.log("Sign Up");
                      // console.log(user);
                      // updateProfile(user, {
                      //   displayName: name.current.value,
                      //   photoURL: "abhi nahi dena mereko",
                      // })
                      //   .then(() => {
                      //     const {uid,email,displayName,photoURL} = auth.currentUser;
                      //     dispatch(addUser({
                      //       uid,email,displayName,photoURL
                      //     }))
                      //     navigate("/browse");
                      //   })
                      //   .catch((error) => {
                      //     navigate("/error");
                      //   });
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErrorMessage(errorCode + " " + errorMessage);
                    });
                }
              }
            }}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="font-bold text-red-700">{errorMessage}</p>
          <p
            className="cursor-pointer"
            onClick={() => setIsSignInForm(!isSignInForm)}
          >
            {isSignInForm
              ? "New To Netflix ? Sign Up Now"
              : "Already Registered ? Sign In Now"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
