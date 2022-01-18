// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


import './Login.css'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading } = useAuth();
    // const { user, loginUser, signInWithGoogle, isLoading } = useAuth();

    // const redirect_uri = location.state?.from || '/home';

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

    }

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(location, history)
    // }

    return (
        <>
            <Navigation>s</Navigation>
            <div className="container-fluid">
                <div className="login-container my-5">
                    <h2 className="text-primary fw-bold mb-4 text-center">Please Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        {/* email  */}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Email: </label>
                            <input type="email" onChange={handleOnChange} className="form-control" id="inputEmail3" placeholder="Enter email" name="email" required />
                        </div>
                        {/* password  */}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Password:</label>
                            <input type="password" onChange={handleOnChange} className="form-control" id="inputPassword3" placeholder="Enter Password" name="password" autoComplete="on" required />
                        </div>
                        <br />
                        {/* submit button  */}
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger rounded">Login</button>
                        </div>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                            to="/register">
                            New User? Please Register
                        </NavLink>

                        {/* google sign in button  */}
                        {/* <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div> */}
                    </form>

                    {isLoading && <Spinner animation="border" variant="danger" />}
                </div>
            </div>
        </>
    );
};

export default Login;