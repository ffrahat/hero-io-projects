import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Components/Error/Error";
import 'boxicons';
const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            }
        ]
    }
])

export default router;