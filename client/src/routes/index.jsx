import Home from "../pages/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/SearchPage.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import VerifyOTP from "../pages/VerifyOTP.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import UserMenuMobile from "../pages/UserMenuMobile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element : <App />,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
               path:"search",
                element: <SearchPage/>
            },
            {
                path:"register",
                element: <Register/>
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"forgot-password",
                element: <ForgotPassword/>
            },
            {
                path:"verify-otp",
                element: <VerifyOTP/>
            },
            {
                path:"/reset-password",
                element: <ResetPassword/>
            },
            {
                path:"/userMenuMobile",
                element: <UserMenuMobile/>
            }
        ]
    }
]);

export default router;