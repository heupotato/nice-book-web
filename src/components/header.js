import React from "react";
import {useHistory} from "react-router-dom";

function Header() {
    const history = useHistory();

    const handleDirectToHomepage = () => {
        history.push({
            pathname: '/',
        });
    }

    const handleDirectToLogin = () => {
        history.push({
            pathname: '/login',
        });
    }

    const handleDirectToSignup = () => {
        history.push({
            pathname: '/signup',
        });
    }

    const handleClickSearch = () => {
        //TODO: Create Modal - "You have to login to use this function"
    }

    return(
        <header>
            <div className="header-style">
                <div className="header-component">
                    <div>
                        <img className="logo-header" src='../images/Logo.png' onClick={handleDirectToHomepage}></img>
                    </div>
                    <div className="header-component">
                        <select className="select-filter">
                            <option>Author</option>
                            <option>Title</option>
                        </select>
                        <input className="search-input form-control input-field-search"  style={{borderRadius: '0rem 0.25rem 0.25rem 0rem'}} placeholder="Search any book..." name="search" type="text"/>
                        <i className="fa fa-search icon-search fa-lg" onClick={handleClickSearch}></i>
                    </div>
                    <div className="header-component left-component">
                        <button type="button" className="btn-login-header" onClick={handleDirectToLogin}>Login</button>
                        <button type="button" className="btn-signup-header" onClick={handleDirectToSignup}>Sign up</button>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;