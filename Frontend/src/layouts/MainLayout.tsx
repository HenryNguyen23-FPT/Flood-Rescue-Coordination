import { Outlet } from "react-router-dom";
import Header from "./Header";
function MainLayout() {
    return (
        <>
            <Header role={1} />
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>
        </>

    );
}

export default MainLayout;
