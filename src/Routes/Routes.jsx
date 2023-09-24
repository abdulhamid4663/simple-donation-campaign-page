import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donations from "../Pages/Donations/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Pages/CardDetails/CardDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/donations",
                element: <Donations />,
                loader: () => fetch('../data.json')
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: () => fetch('../data.json')
            },
            {
                path: "/card/:id",
                element: <CardDetails />,
                loader: () => fetch("../data.json")
            }
        ]
    }
]);

export default router;