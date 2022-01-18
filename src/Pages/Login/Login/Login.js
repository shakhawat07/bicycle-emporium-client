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
                <div className="login-container row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center m-0 p-0 d-none d-lg-block">

                        <img className="img-fluid img-login" style={{ width: '700px', height: '600px', overflow: 'hidden' }} src="https://image.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37330.jpg" alt="" />

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center m-0 p-0 form-container">
                        <h1 className="text-dark fw-bolder mb-2 mt-4 text-center">Login</h1>
                        {!isLoading &&
                            <form onSubmit={handleLoginSubmit}>
                                <div className="row mb-3 g-4 w-75 mx-auto my-3">
                                    {/* email  */}
                                    <input type="email" onChange={handleOnChange} className="form-control zoom" id="inputEmail" placeholder="Enter Email" name="email" maxLength={62} required />

                                    {/* password  */}
                                    <input type="password" onChange={handleOnChange} className="form-control zoom" id="inputPassword3" placeholder="Enter Password" name="password" maxLength={40} autoComplete="on" required />
                                </div>

                                {/* submit button  */}
                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" className="btn btn-primary rounded zoom">Login</button>
                                </div>
                                <br />

                                <NavLink
                                    style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}
                                    to="/register">
                                    New User? Please Register
                                </NavLink>
                                <br />



                                {/* google sign in button  */}
                                {/* <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div> */}
                            </form>

                        }
                        {isLoading && <Spinner animation="border" variant="danger" />}
                    </div>


                </div>
            </div>
        </>
    );
};

export default Login;