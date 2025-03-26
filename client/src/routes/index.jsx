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
import Dashboard from "../layout/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import MyOrder from "../pages/MyOrder.jsx";
import Address from "../pages/Address.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import SubCategoryPage from "../pages/SubCategoryPage.jsx";
import UploadProduct from "../pages/UploadProduct.jsx";
import Product from "../pages/Product.jsx";
import AdminPermision from "../layout/AdminPermission.jsx";
import ProductAdmin from "../pages/ProductAdmin.jsx";
import ProductListPage from "../pages/ProductListPage.jsx";
import ProductDisplayPage from "../pages/ProductDisplayPage.jsx";
import CartMobile from "../pages/CartMobile.jsx";

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
                path:"reset-password",
                element: <ResetPassword/>
            },
            {
                path:"userMenuMobile",
                element: <UserMenuMobile/>
            },
            {
                path:"dashboard",
                element: <Dashboard/>,
                children: [
                {
                    path:"profile",
                    element: <Profile/>
                },
                {
                    path:"myorders",
                    element:<MyOrder/>
                },
                {
                    path:"address",
                    element:<Address/>
                },
                {
                    path:"category",
                    element: <AdminPermision> <CategoryPage/> </AdminPermision>
                },
                {
                    path:"subcategory",
                    element: <AdminPermision> <SubCategoryPage/> </AdminPermision>
                },
                {
                    path:"upload-product",
                    element:  <AdminPermision> <UploadProduct/> </AdminPermision>
                },
                {
                    path:"product",
                    element:  <AdminPermision> <ProductAdmin/>  </AdminPermision>
                }
             ]     
            },
            {
               path:":category",
               children : [
                {
                    path:":subCategory",
                    element:<ProductListPage/>
                }
               ]
            },
            {
                path:"product/:product",
                element: <ProductDisplayPage/>
            },
            {
                path:"cart",
                element: <CartMobile/>
            }
        ]
    }
]);

export default router;