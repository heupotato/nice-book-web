import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import BookService from "../../api-services/book-service";

function Category({match}){
    const name = match.params.name; 
    console.log(name); 
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        //TODO: use name to call get books by genre service 
        
        //after that, call setBookList to set the response.data
    }, [name])

    const convertBookList = (books) => {
        let bookCo = books.map((book) => {
            return <BookThumbnail id={book._id} image={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return bookCo
    }


    return(
        <div className="search-page">
            <div className="book-row">
                {convertBookList(bookList)}
            </div>
        </div>
    ); 

}
export default Category