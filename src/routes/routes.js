import SignUp from '../pages/signup';
import Login from '../pages/login';
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
    }
]

export const PRIVATE_ROUTES_ADMIN = [
    
]

export const PRIVATE_ROUTES_MANAGER = [

]

export const PRIVATE_ROUTES_USER = [

]