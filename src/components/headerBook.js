import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookService from "../api-services/book-service";
function HeaderBook() {

    const [categoriesList, setCategories] = useState(); 

    useEffect(() => {
        BookService.getAllGenres().then(response => {
            let genres = response.data; 
            let categorieDropDown = genres.map((genre)=> {
                <div className="dropdown-content">
                    <Link to={"/category/" + genre}>{genre}</Link>
                </div>
            })
            setCategories(categorieDropDown); 
        })
        .catch(err => console.log(err))
    }, [])
    
    return(
        <header className="header-book">
            <button className="btn-header">Discover</button> &nbsp;
            <button className="btn-header">Top Books</button> &nbsp;
            <button className="btn-header">New Release</button> &nbsp;
            <button className="btn-header">Recommended</button> &nbsp;
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button style={{marginTop: '20px', background: 'white', border: 'none', fontWeight: '600', marginBottom: '20px'}}>Categories</button>
                <i class="fas fa-angle-down" style={{marginTop: '25px', marginLeft: '10px'}}></i>
            </div>
        </header>
    )
}

export default HeaderBook;