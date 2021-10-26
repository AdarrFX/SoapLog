import React from "react";

export const LogEntry = (props) => {

    console.log("It's here")

    return (
        <div className="logentry-wrapper">
            <div className="logentry-photo-container">
                <img src={ props.soapImageLink }></img>
            </div>
            <div className="logentry-info-container">
                <h1>Soap Title: { props.soapTitle }</h1>
                <p>Soap description goes here: { props.soapDescription }</p>
            </div>
        </div>
    )
};