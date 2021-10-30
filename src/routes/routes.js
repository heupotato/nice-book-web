import SignUp from '../pages/login_signup/signup';
import Login from '../pages/login_signup/login';
import Verify from '../pages/login_signup/verify';
import ForgotPassword from "../pages/forgot_password/forgotPassword";
import NewPassword from "../pages/forgot_password/newPassword";
import Homepage from '../pages/homepage';
import UserProfile from '../pages/user-profile/profile';
import EditProfile from '../pages/user-profile/editProfile';
import DetailBook from '../pages/book/detailBook';

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
    }, 
]

export const PRIVATE_ROUTES_ADMIN = [

]

export const PRIVATE_ROUTES_MANAGER = [

]

export const PRIVATE_ROUTES_USER = [
    {
        path: '/profile', 
        exact: true, 
        main: UserProfile
    },
    {
        path: '/profile/edit', 
        exact: true, 
        main: EditProfile
    },
    {
        path: '/books',
        exact: true,
        main: DetailBook
    },
]
