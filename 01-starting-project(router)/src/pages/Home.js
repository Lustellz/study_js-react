import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("products");
    }
    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="products"> the list of products</Link>.
                {/* a tag approach is unappropriate for SPA, for sending another new http request */}
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
                {/* just to show how navigate works programatically */}
            </p>
        </>
    );
}

export default HomePage;
