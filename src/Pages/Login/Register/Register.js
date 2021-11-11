import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

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
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="container-fluid">
            <div className="login-container my-5">
                <h2 className="text-primary fw-bold mb-4 text-center">Please Register</h2>
                {!isLoading &&
                    <form onSubmit={handleLoginSubmit}>

                        {/* user name  */}
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Username: </label>
                            <input type="text" onBlur={handleOnBlur} className="form-control" id="inputName" placeholder="Enter Username" name="name" required />
                        </div>
                        {/* email  */}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Email: </label>
                            <input onBlur={handleOnBlur} type="email" className="form-control" id="inputEmail3" placeholder="Enter email" name="email" required />
                        </div>
                        {/* password  */}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Password:</label>
                            <input type="password" onBlur={handleOnBlur} className="form-control" id="inputPassword1" placeholder="Enter Password" name="password" autoComplete="on" required />
                        </div>
                        {/* re-type password  */}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Re-Type Password:</label>
                            <input type="password" onBlur={handleOnBlur} className="form-control" id="inputPassword2" placeholder="Re-Type Password " name="password2" autoComplete="on" required />
                        </div>
                        {/* phone  */}
                        {/* <div className="row mb-3">
                        <label htmlFor="inputPhone" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Phone: </label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone" name="phone" />
                    </div> */}
                        {/* address  */}
                        {/* <div className="row mb-3">
                        <label htmlFor="inputAddress" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Address: </label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" name="address" />
                    </div> */}

                        {/* submit button  */}
                        {/* <div className="row mb-2 text-danger">{error}</div> */}
                        <br />
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger rounded">Register</button>
                        </div>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                            to="/login">
                            Already Registered? Please Login
                        </NavLink>
                        {/* google sign in button  */}
                        {/* <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div> */}
                    </form>}
                {isLoading && <Spinner animation="border" variant="danger" />}
                {/* {user?.email && alert('User Created successfully!')}
                {authError && alert({ authError })} */}
            </div>
        </div>
    );
};

export default Register;