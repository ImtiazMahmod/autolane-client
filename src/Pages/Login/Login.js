import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, user } = useAuth()
    console.log(user)
    return (
        <div className="my-5">
            <h1 className="my-3">Login</h1>
            <button className="btn btn-warning" onClick={googleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;