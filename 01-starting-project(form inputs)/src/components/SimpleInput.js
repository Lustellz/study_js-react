import {
    //  useEffect,
    useState,
} from "react";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    // const [isFormValid, setIsFormValid] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [isEnteredEmailTouched, setIsEnteredEamilTouched] = useState(false);

    const isEnteredNameValid = enteredName.trim() !== "";
    const isNameInputInvalid = !isEnteredNameValid && enteredNameTouched;

    const isEnteredEmailValid = enteredEmail.includes("@");
    const isEnteredEmailInvalid = !isEnteredEmailValid && isEnteredEmailTouched;

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) isFormValid = true;

    // useEffect(() => {
    //     if (isEnteredNameValid) setIsFormValid(true);
    //     else setIsFormValid(false);
    // }, [isEnteredNameValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const emailInputBlurHandler = (event) => {
        setIsEnteredEamilTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        if (enteredName.trim() === "") {
            if (!isEnteredNameValid) return;
        }
        console.log(enteredName);
        // nameInputRef.current.value = '' => NOT IDEAL, DON'T MANIPULATE THE DOM (react should deal with this, so this is not ideal.)
        setEnteredName("");
        setEnteredNameTouched(false);

        setEnteredEmail("");
        setIsEnteredEamilTouched(false);
    };

    const nameInputClasses = isNameInputInvalid
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = isEnteredEmailValid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {isNameInputInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {isEnteredEmailInvalid && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
