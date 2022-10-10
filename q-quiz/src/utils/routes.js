import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import QuizSInglePage from "../components/QuizSInglePage";

import Root from "../components/Root";
import Statistic from "../components/Statistic";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />,
            },
            {
                path: "topic",
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />,
            },
            {
                path: "statistic",
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistic />,
            },
            {
                path: "quiz/:id",
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizSInglePage />,
            },
        ]
    },
]);