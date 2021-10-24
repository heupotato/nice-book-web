import React from "react";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import AuthService from '../api-services/auth-service';
import LocalStorageService from "../services/localStorage";

function HeaderUser() {
    const history = useHistory();

    const handleDirectToHomepage = () => {
        history.push({
            pathname: '/',
        });
    }

    const handleSignOut = () => {
        AuthService.logout();
        history.push({
            pathname: '/login',
        });
        window.location.reload()
    }

    //NOTE: This line get fullname from localstorage, check localStorage.js file
    const username = LocalStorageService.username;
    return(
        <header>
            <div className="header-style">
                <div className="header-component">
                    <div>
                        <img className="logo-header" src='./images/Logo.png' onClick={handleDirectToHomepage}></img>
                    </div>
                    <div className="header-component ">
                        <input className="search-input form-control input-field-search" placeholder="Search any book..." name="search" type="text"/>
                        <i className="fa fa-search icon-search fa-lg"></i>
                    </div>
                    <div className="dropdown">
                        <h6 className="header-component left-component" style={{marginTop: '20px'}}>Welcome, {username}</h6>
                        <div className="dropdown-content">
                            <Link to="/profile">Profile</Link>
                        </div>
                    </div>
                    <div className="header-component left-component">
                        <button type="button" className="btn-login-header" onClick={handleSignOut}>Sign out</button>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default HeaderUser;
