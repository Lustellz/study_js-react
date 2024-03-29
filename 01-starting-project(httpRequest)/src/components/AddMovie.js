import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
    const titleRef = useRef("");
    const openingTextRef = useRef("");
    const releaseDateRef = useRef("");
    const urlRef = useRef("");

    function submitHandler(event) {
        event.preventDefault();

        // could add validation here...

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
            imageURL: urlRef.current.value,
        };

        props.onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea
                    rows="5"
                    id="opening-text"
                    ref={openingTextRef}
                ></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Poster URL</label>
                <input type="text" id="url" ref={urlRef} />
            </div>
            <button>Add Movie</button>
        </form>
    );
}

export default AddMovie;
