import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
    const data = useLoaderData();

    if (data.isError) return <p>{data.message}</p>;

    const events = data.events;
    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
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
        return json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData; // we can return whatever, even a response object(and react would automatically extract the data from the response)
    }
}
