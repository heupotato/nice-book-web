import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import BookService from "../../api-services/book-service";
import BookThumbnail from "../../components/book-thumbnail";
import HeaderBook from "../../components/headerBook";

function Category({match}){
    const name = match.params.name; 
    console.log(name); 
    const [bookList, setBookList] = useState([])
    const [genres, setGenre] = useState({
        genres: name,
    })

    useEffect(async () => {
        // //TODO: use name to call get books by genre service 
        const res = await BookService.searchBook(genres);
        // //after that, call setBookList to set the response.data
        setBookList(res);
    }, [name])

    const convertBookList = (books) => {
        let bookCo = books.map((book) => {
            return <BookThumbnail id={book._id} bookName={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return bookCo
    }

    if (bookList.length === 0 )
    return(
        <div>
            <HeaderBook/>
            <div className='blank20'></div>
            <div className='book-row-title' style={{textAlign: 'center'}}>Category: {name}</div>
            <div style={{height:'100vh'}}>
                <img className="img-not-found" src='../images/book-not-found.png'></img>
            </div>
        </div>
    ); 
    else 
    return(
        <div className="search-page">
            <HeaderBook/>
            <div className='blank20'></div>
            <div className='book-row-title' style={{textAlign: 'center'}}>Category: {name}</div>
            <div className="book-row">
                {convertBookList(bookList)}
            </div>
        </div>
    ); 

}
export default Category