import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to="/" className="btn">
                Go Home
            </Link>
        </div>
    );
};

export default Error;
