import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://www.vjp.de/fileadmin/_processed_/1/9/csm_Mu__nchen_1072x350px_7467e05290.jpg",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg",
        address: "Some address 10, 12345 Some City",
        description: "This is a second meetup!",
    },
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
