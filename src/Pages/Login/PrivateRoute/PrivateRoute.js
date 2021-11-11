import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    // const {children, ...rest} = props;
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;