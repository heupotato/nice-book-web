import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import BookService from "../../api-services/book-service";
import BookThumbnail from "../../components/book-thumbnail";
import HeaderBook from "../../components/headerBook";
import loading from "../../gifs/loading.gif"

function NewReleaseBook(){
    const [newRel, setNewRel] = useState([]); 
    const [isLoaded, setIsloaded] = useState(false); 

    useEffect(async ()  =>  {
        BookService.getNewReleaseBook().then(res => {
            setNewRel(res.data.docs);
            setIsloaded(true); 
        })
        .catch (err => console.log(err))
    }, []); 
    
    const convertNewRelease = (newRelList) => {
        let listNewRel = newRelList.map((book) => {
            return <BookThumbnail id={book._id} bookName={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return listNewRel;
    }
    console.log(newRel)
    
    if (isLoaded === false)
    return(
        <div>
            <HeaderBook/>
            <div style={{height:'100vh'}}>
                <img className="img-loading" src={loading} style={{height:"100vh"}}></img>
            </div>
        </div>
    )

    if (newRel.length === 0 && isLoaded)
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
            <div className='book-row-title' style={{textAlign: 'center', marginBottom: '20px'}}>New release</div>
            <div className="book-row">
                {convertNewRelease(newRel)}
            </div>
        </div>
    ); 
}

export default NewReleaseBook; 