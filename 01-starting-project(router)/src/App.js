import {
    createBrowserRouter,
    // createRoutesFromElements, // also available
    RouterProvider,
    // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//     </Route>
// );

const router = createBrowserRouter([
    {
        path: "/root", // this is an absolute path
        element: <RootLayout />, // it works as a wrapper of routes, which is path dependant
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> }, // these should be relative paths (should not start with slash '/' to ensure not absolute)
            // we can make default route as index page by using the proper option parameter
            { path: "products", element: <ProductsPage /> },
            { path: "products/:id", element: <ProductDetailPage /> }, // this segment gets dynamic
        ],
    },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
