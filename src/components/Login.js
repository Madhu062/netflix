import React, { useState, useRef } from 'react'
import Header from './Header'
import "../App.css"
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { addUser, removeUser } from '../utils/userSlice';



const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const name = useRef(null);

    const password = useRef(null);
    const dispatch = useDispatch();


    const handleButtonClick = () => {
        const message = checkValidate(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
            if (!isSignInForm) {
                createUserWithEmailAndPassword(
                    auth,
                     email.current.value, 
                     password.current.value
                     )
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        updateProfile(auth, {
                            displayName: name.current.value, 
                            photoURL: USER_AVATAR,
                        }).then(() => {
                            const {uid,email,displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({uid: uid,email:email,displayName:displayName,photoURL:photoURL}))

                            // Profile updated!
                            // ...
                          }).catch((error) => {
                            // An error occurred
                            setErrorMessage(error.message)
                            // ...
                          });
                       
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-" + errorMessage);
                        // ..
                    });

            }
            else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;


                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode + "-" + errorMessage);

                });
            }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)

    }
    return (
        <div>
            <Header />
            <div className="loginbg w-screen" >
               <img 
src={BG_URL}                    alt='logo' /> 
            </div>
            <div>
                <form onSubmit={(e) => e.preventDefault()} className="form my-36 mx-auto right-0 left-0 text-white">
                    <h1 className="font-bold text-3xl py-4"> Sign {isSignInForm ? "In " : "Up"}</h1>
                    {
                        !isSignInForm && (
                            <input type='text' placeholder='Full Name' className='p-4 my-4 text-sm w-full bg-gray-700' />
                        )
                    }

                    <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 text-sm w-full bg-gray-700' />
                    <input ref={password} type='password' placeholder='Password' className='p-4 text-sm my-4 w-full bg-gray-700' />
                    <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
                    <button className='p-4 bg-red-700 w-full my-6' onClick={handleButtonClick}>Sign {isSignInForm ? "In " : "Up"}</button>
                    <p className='text-sm' onClick={toggleSignInForm}>  {isSignInForm ? "New to Netflix? Sign Up " : "Already registered? Sign In"} </p>
                </form>
            </div>
        </div>
    )
}

export default Login