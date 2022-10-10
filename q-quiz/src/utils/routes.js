import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

import Root from "../components/Root";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
        // children: [
        //     {
        //         path: "/",
        //         loader:async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        //         element: <Home />,
        //     },
        // ]
    },
]);