import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
    console.log(props.url);
    return (
        <li
            style={{
                backgroundImage: `url(${props.url})`,
                backgroundSize: "contain",
                margin: "1rem",
                borderRadius: "12px",
            }}
        >
            <div className={classes.movie}>
                <h2>{props.title}</h2>
                <h3>{props.releaseDate}</h3>
                <p>{props.openingText}</p>
            </div>
        </li>
    );
};

export default Movie;
