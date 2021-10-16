import SignUp from '../pages/signup';
import Login from '../pages/login';
import Verify from '../pages/verify';
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
    }
]

export const PRIVATE_ROUTES_ADMIN = [
    
]

export const PRIVATE_ROUTES_MANAGER = [

]

export const PRIVATE_ROUTES_USER = [

]