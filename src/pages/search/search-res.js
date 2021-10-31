import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import BookThumbnail from "../../components/book-thumbnail";
function SearchResult(){
    const location = useLocation(); 
    // console.log("Search Page"); 
    // console.log(location.state); 

    const [searchRes, setSearchRes] = useState([]); 
    let res = location.state
    useEffect(async ()  =>  {
        setSearchRes(res);
    }, [res]); 
    const convertSearchRes = (searchRes) => {
        let listRes = searchRes.map((book) => {
            return <BookThumbnail id={book._id} image={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return listRes;
    }
    console.log(searchRes)
    

    if (res.length === 0 )
    return(
        <div style={{height:'100vh'}}>
            <img className="img-not-found" src='../images/book-not-found.png'></img>
        </div>
    ); 
    else return(
        <div className="search-page">
            <div className="book-row">
                {convertSearchRes(searchRes)}
            </div>
        </div>
        
    ); 
}

export default SearchResult; 