import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";
import BookThumbnail from "../../components/book-thumbnail";
import HeaderBook from "../../components/headerBook";
import loading from "../../gifs/loading.gif"

function SearchResult(){
    const location = useLocation(); 
    // console.log("Search Page"); 
    // console.log(location.state); 

    const [searchRes, setSearchRes] = useState([]); 
    const [isLoaded, setIsloaded] = useState(false); 
    let res = location.state
    useEffect(async ()  =>  {
        setSearchRes(res);
        setIsloaded(true); 
    }, [res]); 
    const convertSearchRes = (searchRes) => {
        let listRes = searchRes.map((book) => {
            return <BookThumbnail id={book._id} bookName={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return listRes;
    }
    console.log(searchRes)
    
    if (isLoaded === false)
    return(
        <div>
            <HeaderBook/>
            <div style={{height:'100vh'}}>
                <img className="img-loading" src={loading} style={{height:"100vh"}}></img>
            </div>
        </div>
    )

    if (res.length === 0 &&isLoaded)
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
            <div className="book-row">
                {convertSearchRes(searchRes)}
            </div>
        </div>
    ); 
}

export default SearchResult; 