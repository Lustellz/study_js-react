import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
    const fetcher = useFetcher(); // we can use different Form apart from 'react-router-dom' driven Form
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === "idle" && data && data.message)
            window.alert(data.message);
    }, [data, state]);

    return (
        // fetcher.Form won't initialize router transition when submitting while still triggering action
        // fetcher can also trigger loader without actual navigation on pages where loader & action belonged

        <fetcher.Form
            method="POST"
            // action="/newsletter"
            className={classes.newsletter}
        >
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
