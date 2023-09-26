// import { useEffect, useState } from "react";
import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
    // props enable us to remove useState & useEffect

    return (
        <Fragment>
            <Head>
                <title>React & NextJs Meetups project</title>
                <meta
                    name="description"
                    content="A practice project for nextjs & React"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

// export async function getServerSideProps(context) {
//     // this is a reserved name of nextjs for prerendering process
//     // this runs every time after deployment & it only runs on server
//     // fetch data from an API

//     const req = context.req; // we can access to incoming requests
//     const res = context.res;

//     return {
//         props: { meetups: DUMMY_MEETUPS },
//     };
// }

export async function getStaticProps() {
    // this is a reserved name of nextjs for prerendering process
    // the code written here would not be exposed on client server
    // caching of page is available
    // fetch data from an API

    const client = await MongoClient.connect(
        "mongodb+srv://admin:reactStudy.@reactnextjsproject.yrtvevr.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 3600, // incremental static generation(number of seconds to wait for before nextjs regenerating the page till incoming request)
    }; // we need to always return object in here, and object 'props' must be props
}

export default HomePage;
