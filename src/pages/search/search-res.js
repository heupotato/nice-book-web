import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import BookThumbnail from "../../components/book-thumbnail";
function SearchResult(){
    const location = useLocation(); 
    console.log("Search Page"); 
    console.log(location.state); 

    const [searchRes, setSearchRes] = useState(); 
    let res = location.state
    useEffect(async ()  =>  {
        console.log("UseEffect"); 
        console.log(res);
        let listRes = await res.map((book) => {
            <BookThumbnail id={book._id} image={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        setSearchRes(listRes)
    }, [res]); 
    // let listRes = res.map((book) => {
    //     <BookThumbnail id={book._id} image={book.title} author={book.author} image={book.image}></BookThumbnail>
    // })

    if (res.length === 0 )
    return(
        <div style={{height:'100vh'}}>
            <img className="img-not-found" src='../images/book-not-found.png'></img>
        </div>
    ); 
    else return(
        <div className="book-row">
            {searchRes}
        </div>
    ); 
}

export default SearchResult; 