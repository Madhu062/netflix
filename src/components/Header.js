import React from 'react';
import '../App.css';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const navigate = useNavigate();
const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div className="headerClass from-black  justify-between ">
            <div>
                <img className="image"
                    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                    alt='logo' />
            </div>
            { user &&
            <div className='flex p-2'>
                <button onClick={handleSignOut} className='text-white font-bold'>Sign out</button>
            </div>
}
        </div>

    )
}

export default Header