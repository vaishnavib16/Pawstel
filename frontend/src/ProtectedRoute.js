import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // Function to check if the user is authenticated
    const isAuthenticated = () => {
        // Check if the token exists (this is a simple example)
        const token = localStorage.getItem('token');
        return token !== null;
    };

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default ProtectedRoute;
