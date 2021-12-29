import { Link } from "react-router-dom";
function BookThumbnail(prop){
    return(
        <div className='book-thumbnail-container'>
            <div className="card book-card " >
                <img className="card-img-top image-thumbnail " src={prop.image} alt="Card image"/>
                <div className="card-body" style={{whiteSpace:'nowrap'}}>
                    <h4 className="card-title email-row">{prop.bookName}</h4>
                    <p className="card-text email-row ">Author: {prop.author}</p>
                    <Link to={"/books/" + prop.id} className="btn btn-primary">View Book</Link>
                </div>
            </div>
        </div>
    ); 
}

export default BookThumbnail; 