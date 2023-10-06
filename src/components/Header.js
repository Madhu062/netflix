import React, { useEffect } from 'react';
import '../App.css';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            }).catch((error) => {
                navigate("/error");
            });
    }
    const handleLanguageChange = (e) => {

        dispatch(changeLanguage(e.target.value))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
                // ...
            }
        });
        //when component unmounts
        return () => unsubscribe();
    }, [])
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())

    }
    return (
        <div className="headerClass from-black  justify-between ">
            <img className="image"
                src={LOGO} alt='logo' />

            {user &&
                <div className='flex p-2'>
                    <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}


                    </select>
                    <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 rounded-lg bg-purple-800'>GPT Search</button>
                    <button onClick={handleSignOut} className='text-white font-bold'>Sign out</button>
                </div>
            }
        </div>

    )
}

export default Header