// import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
    // useNavigate()
    // function submitHandler(event) {
    //     event.preventDefault();
    // }
    return <EventForm method="post" />;
}

export default NewEventPage;
