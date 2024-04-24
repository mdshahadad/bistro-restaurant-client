import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import OurMenu from "../Components/OurMenu/OurMenu";
import OrderFood from "../Components/OrderFood/OrderFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/orderFood',
                element: <OrderFood></OrderFood>
            }
        ]
    }
])

export default router;