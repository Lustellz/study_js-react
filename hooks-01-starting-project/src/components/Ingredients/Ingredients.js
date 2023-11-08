import React, {
    useReducer,
    //  useState,
    useCallback,
} from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
        case "SET":
            return action.ingredients;
        case "ADD":
            return [...currentIngredients, action.ingredient];
        case "DELETE":
            return currentIngredients.filter((ing) => ing.id !== action.id);
        default:
            throw new Error("Should not get there!");
    }
};

const httpReducer = (currHttpState, action) => {
    switch (action.type) {
        case "SEND":
            return { loading: true, error: null };
        case "RESPONSE":
            return { ...currHttpState, loading: false };
        case "ERROR":
            return { loading: false, error: action.errorMessage };
        case "CLEAR":
            return { ...currHttpState, error: null };
        default:
            throw new Error("Should not be reached!");
    }
};

const Ingredients = () => {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
    });
    // const [userIngredients, setUserIngredients] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    const filteredIngredientsHandler = useCallback(
        (filteredIngredients) => {
            // setUserIngredients(filteredIngredients);
            dispatch({ type: "SET", ingredients: filteredIngredients });
        },
        [
            // setUserIngredients
        ]
    );

    const addIngredientHandler = (ingredient) => {
        dispatchHttp({ type: "SEND" });
        // setIsLoading(true);
        fetch(
            "https://react-http-da86f-default-rtdb.firebaseio.com/ingredients.json",
            {
                method: "POST",
                body: JSON.stringify(ingredient),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                // setIsLoading(false);
                dispatchHttp({ type: "RESPONSE" });
                return response.json();
            })
            .then((responseData) => {
                dispatch({
                    type: "ADD",
                    ingredient: { id: responseData.name, ...ingredient },
                });
                // setUserIngredients((prevIngredients) => [
                //     ...prevIngredients,
                //     { id: responseData.name, ...ingredient },
                // ]);
            })
            .catch((error) => {
                dispatchHttp({ type: "ERROR", errorMessage: error.message });
                // setError(error.message);
            });
    };

    const removeIngredientHandler = (ingredientId) => {
        // setIsLoading(true);
        dispatchHttp({ type: "SEND" });
        fetch(
            `https://react-http-da86f-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json/`,
            {
                method: "DELETE",
            }
        )
            .then((response) => {
                dispatchHttp({ type: "RESPONSE" });
                // setIsLoading(false);
                dispatch({ type: "DELETE", id: ingredientId });
                // setUserIngredients((prevIngredients) =>
                //     prevIngredients.filter(
                //         (ingredient) => ingredient.id !== ingredientId
                //     )
                // );
            })
            .catch((error) => {
                dispatchHttp({ type: "ERROR", errorMessage: error.message });
                // setError(error.message);
            });
    };

    const clearError = () => {
        dispatchHttp({ type: "CLEAR" });
        // setError(null);
        // setIsLoading(false);
    };

    return (
        <div className="App">
            {httpState.error && (
                <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
            )}
            <IngredientForm
                onAddIngredient={addIngredientHandler}
                loading={httpState.isLoading}
            />

            <section>
                <Search onLoadIngredients={filteredIngredientsHandler} />
                <IngredientList
                    ingredients={userIngredients}
                    onRemoveItem={removeIngredientHandler}
                />
            </section>
        </div>
    );
};

export default Ingredients;
