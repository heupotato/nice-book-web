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
import Category from '../pages/categories/category';
import TopBook from '../pages/categories/topBook';
import NewReleaseBook from '../pages/categories/newReleaseBook';
import Discover from '../pages/categories/discover';

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
        main: Category
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
    },
    {
        path: '/trending', 
        exact: true, 
        main: TopBook
    },
    {
        path: '/new-release', 
        exact: true, 
        main: NewReleaseBook
    },  
    {
        path: '/discover', 
        exact: true, 
        main: Discover
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
