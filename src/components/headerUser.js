import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import AuthService from '../api-services/auth-service';
import BookService from "../api-services/book-service";
import LocalStorageService from "../services/localStorage";

function HeaderUser() {
    const history = useHistory();
    const username = LocalStorageService.username;
    const [search, setSearch] = useState("");
    const [author, setAuthor] = useState({
        author: '',
    })
    const [title, setTitle] = useState({
        title: '',
    })
    const [genres, setGenres] = useState({
        genres: '',
    })

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
    
    const handleChangeSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
        console.log(search)
    }

    const handleSubmit = () => {
        if(document.getElementById("typeFilter").value == "author"){
            setAuthor({...author, author: search});
            console.log(author.author)
            const res = BookService.searchBook(author);
            console.log(res);
        }
        else if(document.getElementById("typeFilter").value == "title"){
            setTitle({...title, title: search});
            const res = BookService.searchBook(title);
            console.log(res);
        }
        else if(document.getElementById("typeFilter").value == "genres"){
            setGenres({...genres, genres: search});
            const res = BookService.searchBook(title);
            console.log(res);
        }
    }
    
    return(
        <header>
            <div className="header-style">
                <div className="header-component">
                    <div>
                        <img className="logo-header" src='../images/Logo.png' onClick={handleDirectToHomepage}></img>
                    </div>
                    <div className="header-component ">
                        <select id="typeFilter" className="select-filter">
                            <option value="author">Author</option>
                            <option value="title">Title</option>
                            <option value="genres">Genres</option>
                        </select>
                        <input className="search-input form-control input-field-search" style={{borderRadius: '0rem 0.25rem 0.25rem 0rem'}} placeholder="Search any book..." name="search" type="text" onChange={handleChangeSearch}/>
                        <i className="fa fa-search icon-search fa-lg" onClick={handleSubmit}></i>
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
