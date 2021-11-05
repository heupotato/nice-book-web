import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import BookService from "../api-services/book-service";

function HeaderBook() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        BookService.getAllGenres().then(response => {
            let genres = response.data; 
            setCategories(genres); 
        })
        .catch(err => console.log(err))
    }, [])

    const convertCategoryDropDown = (categories) => {
        let dropdownList = categories.map((category) => {
            // return <p>{category}</p>
            return <p><Link style={{ textDecoration: 'none'}} to={"/category/" + category} >{category}</Link></p>
        }); 
        return dropdownList
    }

    return(
        <header className="header-book">
            <button className="btn-header">Discover</button> &nbsp;
            <button className="btn-header">Top Books</button> &nbsp;
            <button className="btn-header">New Release</button> &nbsp;
            <button className="btn-header">Recommended</button> &nbsp;
            <div className="dropdown" style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginTop: '20px', background: 'white', border: 'none', fontWeight: '600', marginBottom: '20px'}}>Categories</div>
                <div className="dropdown-content">
                    {convertCategoryDropDown(categories)}
                </div>
                <i class="fas fa-angle-down" style={{marginTop: '25px', marginLeft: '10px'}}></i>
            </div>
        </header>
    )
}

export default HeaderBook;