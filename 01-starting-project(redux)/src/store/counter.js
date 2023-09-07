import { createSlice } from "@reduxjs/toolkit";

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return { counter: state.counter + 1, showCounter: state.showCounter }; // the sate should always overwritten , so we have to pass the whole (we can copy value properly in this way)
//         // state.counter++; // we must not manipulate state like this (it would cause unexpected results, due to reference value / primitive value issues)
//         // return {
//         //     counter: state.counter,
//         //     showCounter: state.showCounter,
//         // };
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrement") {
//         return { counter: state.counter - 1, showCounter: state.showCounter };
//     }

//     if (action.type === "toggle") {
//         return { showCounter: !state.showCounter, counter: state.counter };
//     }

//     return state;
// };

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    // with using it, we can prepare using the slice of global state
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        // all the reducers that this slice would use
        increment(state) {
            state.counter++; // this is available due to @reduxjs/toolkit package for its internal translation
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload; // the automatically created poperty's name is 'payload'
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
