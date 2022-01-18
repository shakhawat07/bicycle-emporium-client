import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, authError } = useAuth();
    // const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, "client", history);
        e.preventDefault();
        if (authError === '') {
            alert('User Created successfully!');
        }
        else {
            alert('Registration Failed. Error ' + { authError });
        }
    }
    return (
        <>
            <Navigation></Navigation>
            <div className="container-fluid">
                <div className="login-container row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center m-0 p-0 d-none d-lg-block">

                        <img className="img-fluid" style={{ width: '700px', height: '600px', overflow: 'hidden' }} src="https://image.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37330.jpg" alt="" />

                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center m-0 p-0 form-container">
                        <h1 className="text-dark fw-bolder mb-2 mt-4 text-center">Register</h1>
                        {!isLoading &&
                            <form onSubmit={handleLoginSubmit}>

                                {/* <input type="hidden" onBlur={handleOnBlur} className="form-control" id="inputName3" placeholder="Role" name="role" value="client" /> */}
                                {/* user name  */}

                                <div className="row mb-3 g-4 w-75 mx-auto my-3">

                                    {/* user name  */}
                                    <input type="text" onBlur={handleOnBlur} className="form-control zoom" id="inputName" placeholder="Enter Username" name="name" maxLength={80} required />

                                    {/* email  */}
                                    <input onBlur={handleOnBlur} type="email" className="form-control zoom" id="inputEmail3" placeholder="Enter Email" name="email" maxLength={62} required />

                                    {/* password  */}
                                    <input type="password" onBlur={handleOnBlur} className="form-control zoom" id="inputPassword1" placeholder="Enter Password" name="password" maxLength={40} autoComplete="on" required />

                                    {/* re-type password  */}
                                    <input type="password" onBlur={handleOnBlur} className="form-control zoom" id="inputPassword2" placeholder="Re-Type Password " name="password2" autoComplete="on" required />

                                </div>

                                {/* submit button  */}
                                {/* <div className="row mb-2 text-danger">{error}</div> */}
                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" className="btn btn-primary rounded zoom">Register</button>
                                </div>
                                <br />
                                <NavLink
                                    style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}
                                    to="/login">
                                    Already Registered? Please Login
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

export default Register;