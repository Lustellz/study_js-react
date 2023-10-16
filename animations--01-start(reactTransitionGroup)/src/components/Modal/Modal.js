import React from "react";

import "./Modal.css";
import Transition from "react-transition-group/Transition";
// import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
    enter: 400,
    exit: 1000,
};

const modal = (props) => {
    return (
        <Transition
            // <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            // classNames={{
            //     enter: "",
            //     enterActive: "ModalOpen",
            //     exit: "",
            //     exitActive: "ModalClosed",
            //     // appear:
            //     // appearActive:
            // }}
            // // "fade-slide"
        >
            {(state) => {
                const cssClasses = [
                    "Modal",
                    state === "entering"
                        ? "ModalOpen"
                        : state === "exiting"
                        ? "ModalClosed"
                        : null,
                ];
                return (
                    <div
                        className={cssClasses.join( // "Modal"
                            " "
                        )}
                    >
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
                        </button>
                    </div>
                );
            }}
            {/* </CSSTransition> */}
        </Transition>
    );
};

export default modal;
