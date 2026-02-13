import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ListRequestPage from "@/pages/ListRequestPage.tsx";
import FullMapPage from "@/pages/FullMapPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,   // root
        children: [
            {
                element: <MainLayout role={1} />,  // user layout
                children: [
                    { index: true, element: <HomePage /> },
                ],
            },
            {
                path: "coordinate",
                element: <MainLayout role={3} />,
                children: [
                    { index: true, element: <ListRequestPage /> },
                ],
            },
            {
                path: "fullmap",
                element: <FullMapPage/>,
            },
        ],
    },
]);