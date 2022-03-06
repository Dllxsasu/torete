import React from "react";
import './Label.css';

const Label = ({text}) => {
    return (
        <div>
            <label className="label-type"> {text} </label>
        </div>
    )
};

export default Label;