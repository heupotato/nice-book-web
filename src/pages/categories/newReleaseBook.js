import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import BookService from "../../api-services/book-service";
import BookThumbnail from "../../components/book-thumbnail";
import HeaderBook from "../../components/headerBook";

function NewReleaseBook(){
    const [newRel, setNewRel] = useState([]); 

    useEffect(async ()  =>  {
        BookService.getNewReleaseBook().then(res => {
            setNewRel(res.data.docs);
        })
        .catch (err => console.log(err))
    }, []); 
    
    const convertNewRelease = (newRelList) => {
        let listNewRel = newRelList.map((book) => {
            return <BookThumbnail id={book._id} image={book.title} author={book.author} image={book.image}></BookThumbnail>
        })
        return listNewRel;
    }
    console.log(newRel)
    

    if (newRel.length === 0 )
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