import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name="description"
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    // let nextjs to know the pregenerated url of dynamic pages

    const client = await MongoClient.connect(
        "mongodb+srv://admin:reactStudy.@reactnextjsproject.yrtvevr.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // filter criteria, fetching field

    client.close();

    return {
        // here we describe the dynamic values
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
        // [
        //     {
        //         params: {
        //             // params is must-have
        //             meetupId: "m1",
        //         },
        //     },
        //     {
        //         params: {
        //             meetupId: "m2",
        //         },
        //     },
        // ],
        fallback: true, // this means we listed the whole of pages <-> true: the pages would be dynamic
    };
}

export async function getStaticProps(context) {
    // we can't use useRouter in here
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    console.log(meetupId);
    const client = await MongoClient.connect(
        "mongodb+srv://admin:reactStudy.@reactnextjsproject.yrtvevr.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetails;
