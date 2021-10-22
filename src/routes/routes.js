import SignUp from '../pages/login_signup/signup';
import Login from '../pages/login_signup/login';
import Verify from '../pages/login_signup/verify';
import ForgotPassword from "../pages/forgot_password/forgotPassword";
import NewPassword from "../pages/forgot_password/newPassword";
import Homepage from '../pages/homepage';
export const ROUTES = [
    {
        path: "/signup",
        exact: true,
        main: SignUp
    },
    {
        path: "/login",
        exact: true,
        main: Login
    },
    {
        path: "/verify",
        exact: true,
        main: Verify
    },
    {
        path: "/forgot-password",
        exact: true,
        main: ForgotPassword
    },
    {
        path: "/new-password",
        exact: true,
        main: NewPassword
    }, 
    {
        path: "/", 
        exact: true, 
        main: Homepage
    }
]

export const PRIVATE_ROUTES_ADMIN = [

]

export const PRIVATE_ROUTES_MANAGER = [

]

export const PRIVATE_ROUTES_USER = [

]
