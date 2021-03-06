import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import BookService from "../api-services/book-service";

function HeaderBook() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        BookService.getAllGenres().then(response => {
            let genres = response.data; 
            setCategories(genres);
            console.log(categories) 
        })
        .catch(err => console.log(err))
    }, [])

    const convertCategoryDropDown = (categories) => {
        let dropdownList = categories.map((category) => {
            return <p><Link style={{ textDecoration: 'none', color: 'black'}} to={"/category/" + category} >{category}</Link></p>
        }); 
        return dropdownList
    }

    const handleClick = () => {
        window.location.reload()
    }

    return(
        <header className="header-book">
            <button className="btn-header"><Link to='/discover'  style={{ textDecoration: 'none', color:'black'}}>Discover</Link></button> &nbsp;
            <button className="btn-header"><Link to='/trending'  style={{ textDecoration: 'none', color:'black'}}>Top Books</Link></button> &nbsp;
            <button className="btn-header"><Link to='/new-release'  style={{ textDecoration: 'none', color:'black'}}>New Release</Link></button> &nbsp;
            <button className="btn-header"><Link to='/recommend'  style={{ textDecoration: 'none', color:'black'}}>Recommended</Link></button> &nbsp;
            <div className="dropdown" style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginTop: '20px', background: 'white', border: 'none', fontWeight: '600', marginBottom: '20px'}}>Categories</div>
                <div className="dropdown-header-book" onClick={handleClick}>
                    {convertCategoryDropDown(categories)}
                </div>
                <i class="fas fa-angle-down" style={{marginTop: '25px', marginLeft: '10px'}}></i>
            </div>
        </header>
    )
}

export default HeaderBook;