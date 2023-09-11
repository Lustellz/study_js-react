import { Outlet } from "react-router-dom"; // marks the place where the child elements should be rndered
import MainNavigation from "./components/MainNavigation";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
