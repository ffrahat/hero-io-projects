import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts
    }
])

export default router;