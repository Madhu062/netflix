import React, { useEffect } from 'react';
import '../App.css';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";


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
    return (
        <div className="headerClass from-black  justify-between ">
            <div>
                <img className="image"
                    src={LOGO} alt='logo' />
            </div>
            {user &&
                <div className='flex p-2'>
                    <button onClick={handleSignOut} className='text-white font-bold'>Sign out</button>
                </div>
            }
        </div>

    )
}

export default Header