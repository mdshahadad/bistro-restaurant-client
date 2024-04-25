import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import OurMenu from "../Components/OurMenu/OurMenu";
import OrderFood from "../Components/OrderFood/OrderFood";
import Login from "../Components/Authentication/Login/Login";
import SignUp from "../Components/Authentication/SignUp/SignUp";

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
                path: 'order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;