import React, { useState } from 'react'
import Header from './Header'
import "../App.css"

const Login = () => {
 const [isSignInForm, setIsSignInForm ] = useState([])



    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInForm)

    }
  return (
    <div>
        <Header />
        <div className="loginbg" >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/b3d0da7f-b685-4fd1-9c84-53e4e60aa0d7/US-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='logo' />
        </div>
        <div>
        <form className="form my-36 mx-auto right-0 left-0 text-white">
            <h1 className="font-bold text-3xl py-4"> Sign {isSignInForm ? "In ": "Up"}</h1>
{
    !isSignInForm && (
        <input type='text' placeholder='Full Name' className='p-4 my-4 text-sm w-full bg-gray-700' />
    )
}            

                <input type='text' placeholder='Email Address' className='p-4 my-4 text-sm w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-4 text-sm my-4 w-full bg-gray-700' />
                <button className='p-4 bg-red-700 w-full my-6'>Sign {isSignInForm ? "In ": "Up"}</button>
                <p className='text-sm' onClick={toggleSignInForm}>  {isSignInForm ? "New to Netflix? Sign Up ": "Already registered? Sign In"} </p>
            </form>
        </div>
    </div>
  )
}

export default Login