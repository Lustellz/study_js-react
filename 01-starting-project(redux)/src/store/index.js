// import { createStore  } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store =
    // createStore(
    configureStore(
        // enable merging multiple stores(for we need to pass only one main store)
        {
            reducer: { counter: counterReducer, auth: authReducer }, // this would be automatically merged to one
            // {counter: counterSlice.reducer} // we can pass map for multiple reducers
        }
        // counterSlice.reducer
        // counterReducer
    ); //when multiple slices, we need to use combineReducers or configureStore

export default store;
