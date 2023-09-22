import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";

const BlogPage = lazy(() => import("./pages/Blog")); // this only returns Promise without lazy
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "posts",
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <BlogPage />
                            </Suspense>
                        ), // it requires a few time, so we need Suspense component
                        loader: () =>
                            import("./pages/Blog").then((module) =>
                                module.loader()
                            ),
                    }, // this works dynamically, only when needed & this returns promise
                    {
                        path: ":id",
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <PostPage />
                            </Suspense>
                        ),
                        loader: (params) =>
                            import("./pages/Post").then((module) =>
                                module.loader(params)
                            ),
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
