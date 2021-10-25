import React from "react";

export const LogEntry = (props) => {

    console.log("It's here")

    return (
        <div className="logentry-wrapper">
            <div className="logentry-photo-container">
                <img src="http://placekitten.com/300/300"></img>
            </div>
            <div className="logentry-info-container">
                <h1>Soap Title</h1>
                <p>A description of the soap would go here.</p>
            </div>
        </div>
    )
};