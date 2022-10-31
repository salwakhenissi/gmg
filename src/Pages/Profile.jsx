import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, logout } from "../JS/actions/authActions";

export default function Profile() {
    const id = localStorage.getItem("id");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser(id, dispatch));
    }, [dispatch, id]);
    const user = useSelector((state) => state.authReducer.user);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Profile</h1>
            {user && (
                <>
                    <h2>{user.username}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.firstName}</h2>
                    <h2>{user.lastName}</h2>

                    <button onClick={() => dispatch(logout(navigate))}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
