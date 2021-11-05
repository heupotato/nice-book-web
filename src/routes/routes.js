import SignUp from '../pages/login_signup/signup';
import Login from '../pages/login_signup/login';
import Verify from '../pages/login_signup/verify';
import ForgotPassword from "../pages/forgot_password/forgotPassword";
import NewPassword from "../pages/forgot_password/newPassword";
import Homepage from '../pages/homepage';
import UserProfile from '../pages/user-profile/profile';
import EditProfile from '../pages/user-profile/editProfile';
import DetailBook from '../pages/book/detailBook';
import ReadingList from '../pages/list-books/reading';
import FavouriteList from '../pages/list-books/favourites';
import ReadLaterList from '../pages/list-books/readLater';
import SearchResult from '../pages/search/search-res';

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
    {
        path: '/category/:name', 
        exact: true, 
        main: ReadLaterList
    }, 
    {
        path: '/search', 
        exact: true, 
        main: SearchResult
    },
    {
        path: '/books/:id',
        exact: true,
        main: DetailBook
    }

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
        path: '/profile/readings', 
        exact: true, 
        main: ReadingList
    }, 
    {
        path: '/profile/favourites', 
        exact: true, 
        main: FavouriteList
    }, 
    {
        path: '/profile/read-later', 
        exact: true, 
        main: ReadLaterList
    }, 
    
]
