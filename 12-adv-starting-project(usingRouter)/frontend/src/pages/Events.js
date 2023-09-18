import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
    const { events } = useLoaderData();
    // if (data.isError) return <p>{data.message}</p>;

    // const events = data.events;
    // return <EventsList events={events} />;

    return (
        //Suspense component is used to uncertain situations to show fallback while waiting for other data to arrive
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={events}>
                {(
                    loadedEvents // once resolved and data to be appeared, we'll perform the code
                ) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    ); // require defer to resolve (and wait till the data to be loaded come)
}

export default EventsPage;

async function loadEvents() {
    // loader is performed in browser, not in backend, but we can't use reactHooks in the loader function(the only limitation)
    const response = await fetch("http://localhost:8080/events"); // fetch returns promise, which would be resolved in respone object
    if (!response.ok) {
        // incorrect response
        // return { isError: true, message: "Could not fetch events" };
        // throw { message: "Could not fetch events" };
        // throw new Response(
        //     JSON.stringify(
        //         { message: "Could not fetch events." },
        //         { status: 500 }
        //     )
        // );
        throw json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events; // we can return whatever, even a response object(and react would automatically extract the data from the response)
    }
}

export function loader() {
    return defer({
        // bundle all of http requests to handle Promises(although not resolved yet)
        events: loadEvents(), // key: function
    });
}
