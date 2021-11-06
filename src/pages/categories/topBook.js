import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import BookService from "../../api-services/book-service";
import BookThumbnail from "../../components/book-thumbnail";
import HeaderBook from "../../components/headerBook";

function TopBook(){
    const [topBook, setTopBook] = useState([]); 

    useEffect(async ()  =>  {
        BookService.getTopBook().then(res => {
            setTopBook(res.data.docs);
        })
        .catch (err => console.log(err))
    }, []); 

    const convertTopBook = (topBk) => {
        let listTopBook = topBk.map((book) => {
            return <BookThumbnail id={book._id} bookName={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return listTopBook;
    }
    console.log(topBook)
    

    if (topBook.length === 0 )
    return(
        <div>
            <HeaderBook/>
            <div style={{height:'100vh'}}>
                <img className="img-not-found" src='../images/book-not-found.png'></img>
            </div>
        </div>
    ); 
    else return(
        <div className="search-page">
            <HeaderBook/>
            <div className='blank20'></div>
            <div className='book-row-title' style={{textAlign: 'center', marginBottom: '20px'}}>Top trending</div>
            <div className="book-row">
                {convertTopBook(topBook)}
            </div>
        </div>
    ); 
}

export default TopBook; 