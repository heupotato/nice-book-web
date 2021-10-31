import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookService from "../../api-services/book-service";
import HeaderBook from "../../components/headerBook";

function DetailBook({match}) {
    const defaultBookImage = 'https://docsbydesign.com/wp-content/uploads/2015/08/readingbook.jpg';
    //const history = useHistory(); 
    const bookID = "617af4bf859d22425a223eda";
    //TODO: Uncomment this code to get ID from link 
    // const bookID = match.params.id; 
    console.log(bookID)
    const [book, setBook] = useState({
        genres: [],
        ratings: [],
        title: '',
        author: '',
        image: '',
        page: '',
        downloads: '',
        view: '',
        price: '',
        content: '',
        summary: '',
    });

    useEffect(() => {
        BookService.getDetailBook(bookID).then(res => {
            console.log(res.data)
            setBook(res.data)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <HeaderBook/>
            <div className="row profile-row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className='book-col'>
                        <div>
                            <img className='book-image' src={book.image === '' || typeof book.image ==='undefined' ? defaultBookImage : book.image}></img>
                        </div>
                        <button class="btn btn-primary btn-lg" style={{margin: '5px', marginTop: '10px', backgroundColor: '#ffc700', borderColor: '#ffc700'}}>Read</button>
                        <button class="btn btn-primary btn-lg" style={{margin: '5px', backgroundColor: 'white' , color: '#ffc700', borderColor: '#ffc700'}}>Listen to audio</button>
                        <div>
                            <i class="far fa-bookmark fa-1x" style={{marginLeft: '2px'}}></i>
                            <button class="btn btn-primary btn-lg" style={{margin: '5px', backgroundColor: 'white', color: 'black', border: 'none'}}>Save for later</button>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                            <button class="btn btn-primary btn-lg" style={{margin: '5px', backgroundColor: 'white', color: 'black', border: 'none'}}>Download</button>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            <button class="btn btn-primary btn-lg" style={{margin: '5px', backgroundColor: 'white', color: 'black', border: 'none'}}>To Share</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 book-detail" style={{display: 'flex', flexDirection: 'column'}}>
                    <h6 style={{color: '#224362'}}>Home 
                        <i class="fas fa-angle-right" style={{marginLeft: '5px', marginRight: '5px'}}></i>
                        Categories 
                        <i class="fas fa-angle-right" style={{marginLeft: '5px', marginRight: '5px'}}></i>
                        Art</h6>
                        <h1>{book.title}</h1>
                    <div className="author">
                        Written by:&nbsp;
                        <div className="author-name">{book.author}</div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row', color: '#427F93'}}>
                        <div style={{marginRight: '10px', color: '#ffc700'}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        {book.ratings.length} &nbsp;
                        <p>Ratings</p> &nbsp;
                        <div style={{color: 'grey', marginLeft: '30px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                            </svg> &nbsp;
                            {book.page}
                        </div> &nbsp;
                        <p style={{color: 'grey'}}>pages</p>
                    </div>
                    <div style={{border: '1px solid grey'}}> </div>
                    <div className="content-book">{book.summary}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailBook;