import React from "react";
import {Link, useHistory} from 'react-router-dom';

function HeaderUser() {
    const history = useHistory();

    const handleDirectToHomepage = () => {
        history.push({
            pathname: '/',
        });
    }

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
                        <img src="./images/avatar.jpg" alt="Avatar" className="avatar"/>
                        <div className="dropdown-content">
                            <p>Profile</p>
                            <p>Setting</p>
                            <p>Log out</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default HeaderUser;
