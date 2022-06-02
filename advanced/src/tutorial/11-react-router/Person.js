import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Link, useParams, Route, Routes } from "react-router-dom";
const Person = () => {
    const [name, setName] = useState("John Doe");
    const { id } = useParams();
    useEffect(() => {
        setName(data.find((person) => person.id === parseInt(id)).name);
    }, [id]);
    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">
                Back
            </Link>
        </div>
    );
};

export default Person;
