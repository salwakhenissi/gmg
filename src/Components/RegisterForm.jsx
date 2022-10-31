import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../JS/actions/authActions";
import { Link } from "react-router-dom";
import './Login.css' 

export default function RegisterForm() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    return (
        <div className='login'>
        <Link to ='/'> 
       

        <img className='login__logo ' src='https://zupimages.net/up/22/24/pdk0.png'/>
        </Link>
        <div>
        <form>
        <h5>Username</h5>
            <input name="username" onChange={handleChange} />
            <h5>Password</h5>
            <input name="password" onChange={handleChange} />
            <h5>Email</h5>
            <input name="email" onChange={handleChange} />
            <h5>FirstName</h5>
            <input name="firstName" onChange={handleChange} />
            <h5>LastName</h5>
            <input name="lastName" onChange={handleChange} />
            </form>
            <button className='login__registerButton'
                onClick={() => {
                    dispatch(register(user, dispatch));
                }}
            >
                Register
            </button>
        </div>
        </div>
    );
}
