import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (isEnteredNameValid) console.log("Name Input is valid!");
    }, [isEnteredNameValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if (enteredName.trim() == "") {
            setIsEnteredNameValid(false);
            return;
        }
        setIsEnteredNameValid(true);
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        // nameInputRef.current.value = '' => NOT IDEAL, DON'T MANIPULATE THE DOM (react should deal with this, so this is not ideal.)
        setEnteredName("");
    };

    const isNameInputInvalid = !isEnteredNameValid && enteredNameTouched;

    const nameInputClasses = isNameInputInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
                {isNameInputInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
