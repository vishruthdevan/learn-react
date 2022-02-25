import React, { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>
                show/hide
            </button>
            {show && <Item />}
        </>
    );
};

const Item = () => {
    return (
        <div>
            <h1>window</h1>
            <h3>size: </h3>
        </div>
    );
};

export default ShowHide;
