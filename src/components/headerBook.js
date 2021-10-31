import { useEffect, useState } from "react";
import Link from 'react-dom';
import BookService from "../api-services/book-service";

function HeaderBook() {
    const [categoriesList, setCategories] = useState([]);

    useEffect(() => {
        BookService.getAllGenres().then(res => {
            let genres = res.data;
            let categoriesDropDown = genres.map((genre) => {
                console.log(genre)
                return <div className="dropdown-content">
                    <Link to={"/categories/" + genre}>{genre}</Link>
                </div>
            }
                
            );
            setCategories(categoriesDropDown);
        }).catch(err => console.log(err))
    }, [])

    return(
        <header className="header-book">
            <button className="btn-header">Discover</button> &nbsp;
            <button className="btn-header">Top Books</button> &nbsp;
            <button className="btn-header">New Release</button> &nbsp;
            <button className="btn-header">Recommended</button> &nbsp;
            <div className="dropdown" style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginTop: '20px', background: 'white', border: 'none', fontWeight: '600', marginBottom: '20px'}}>Categories</div>
                <div className="dropdown-content">
                    {categoriesList}
                </div>
                <i class="fas fa-angle-down" style={{marginTop: '25px', marginLeft: '10px'}}></i>
            </div>
        </header>
    )
}

export default HeaderBook;