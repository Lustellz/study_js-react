import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };
    const enterTaskHandler = async (taskText) => {
        sendTaskRequest(
            {
                url: "https://react-http-da86f-default-rtdb.firebaseio.com/tasks.json",
                method: "POST",
                body: { text: taskText },
                headers: {
                    "Content-Type": "application/json",
                },
            },
            createTask.bind(null, taskText) //.bind: pre-configure a function(이 부분 아직 잘 이해 못 함.)
            //.bind(what does keyword "this" points, the specific parameter to pass for, additional specific parameter ...)
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
