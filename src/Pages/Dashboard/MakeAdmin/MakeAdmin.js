import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    // const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://hidden-ridge-10259.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Made Admin successfully!');
                    // setEmail('');
                    // console.log(data);
                    window.location.reload(false);
                    // setSuccess(true);
                }
                else {
                    alert('Email is invalid to make an admin or Already registered as admin!');
                    window.location.reload(false);
                }

            })

        e.preventDefault()
    }
    return (
        <div className="container-fluid">
            <div className="admin-container my-5">
                <h2 className="text-primary fw-bold mb-4 text-center">Make An Admin</h2>
                <form onSubmit={handleAdminSubmit} name="form1">
                    {/* email  */}
                    <div className="row mb-3">
                        {/* <label htmlFor="inputEmail3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Email: </label> */}
                        <input type="email" onBlur={handleOnBlur} className="form-control" id="inputEmail3" placeholder="Enter email" name="email" required />
                    </div>
                    <br />
                    {/* submit button  */}
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-danger rounded">Make Admin</button>
                    </div>
                    {/* {success && alert('Made Admin successfully!')} */}
                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;