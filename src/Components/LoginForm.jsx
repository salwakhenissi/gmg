import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Login.css' 
import { login } from "../JS/actions/authActions";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [user, setUser] = useState({
        password: "",
        email: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector((state) => state.authReducer.errors);

    return (
        <div className='login'>
        <Link to ='/'> 
        <img className='login__logo ' src='https://zupimages.net/up/22/24/pdk0.png'/>
        </Link>
        
        <div className='login__container'>
            <form>
            <h5>E-mail</h5>
            <input name="email" onChange={handleChange} />
            <h5>Password</h5>
            <input name="password" onChange={handleChange} />
            {errors}
            <button className='login__signInButton'
                onClick={() => {
                    dispatch(login(user, navigate, dispatch));
                }}
            >
                Login
            </button>
            </form>
        </div>
        </div>
    );
}
