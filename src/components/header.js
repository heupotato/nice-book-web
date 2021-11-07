import React, {useState} from "react";
import BookService from "../api-services/book-service";
import {useHistory} from "react-router-dom";

function Header() {
    const history = useHistory();
    const [author, setAuthor] = useState({
        author: '',
    })
    const [title, setTitle] = useState({
        title: '',
    })

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

    const handleChange = (e) => {
        if(document.getElementById("typeFilter").value == "author"){
            setAuthor({...author, author: document.getElementById("search").value});
        }
        else if(document.getElementById("typeFilter").value == "title"){
            setTitle({...title, title: document.getElementById("search").value});
        }
    }

    const handleSubmit = async () => {
        var res; 
        if(document.getElementById("typeFilter").value == "author"){
            res = await BookService.searchBook(author);
            if(author.author != ''){
                history.push({
                    pathname: '/search',
                    state: res
                })
            }
            console.log(res);
        }
        else if(document.getElementById("typeFilter").value == "title"){
            res = await BookService.searchBook(title);
            if(title.title != ''){
                history.push({
                    pathname: '/search',
                    state: res
                })
            }
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
                    <div className="header-component">
                    <select id="typeFilter" className="select-filter" onChange={handleChange}>
                            <option value="author">Author</option>
                            <option value="title">Title</option>
                        </select>
                        <input className="search-input form-control input-field-search" id="search" style={{borderRadius: '0rem 0.25rem 0.25rem 0rem'}} placeholder="Search any book..." name="search" type="text" onChange={handleChange}/>
                        <i className="fa fa-search icon-search fa-lg" onClick={handleSubmit}></i>
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