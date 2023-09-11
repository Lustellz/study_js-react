import { Link, useParams } from "react-router-dom";

function ProductDetailPage(props) {
    const params = useParams();

    return (
        <>
            <p>
                <h1>Product Details!</h1>
                <p>{params.id}</p>
                <p>
                    <Link to=".." relative="path">
                        Back
                    </Link>
                    {/* this relative path is initially coming from the /root path(relative = 'route' is default value) */}
                </p>
            </p>
        </>
    );
}

export default ProductDetailPage;
