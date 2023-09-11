import { Link } from "react-router-dom";

function ProductsPage() {
    const PRODUCTS = [
        { id: "p1", title: "Product 1" },
        { id: "p2", title: "Product 2" },
        { id: "p3", title: "Product 3" },
    ];
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={product.id} relative="">
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductsPage;
