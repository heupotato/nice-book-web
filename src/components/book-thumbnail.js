import { Link } from "react-router-dom";
function BookThumbnail(prop){
    return(
        <div className='book-thumbnail-container'>
            <div className="card book-card " >
                <img className="card-img-top" src={prop.image} alt="Card image" style={{width:'100%'}}/>
                <div className="card-body">
                    <h4 className="card-title">{prop.bookName}</h4>
                    <p className="card-text">Author: {prop.author}</p>
                    <Link to={"/books/" + prop.id} className="btn btn-primary">View Book</Link>
                </div>
            </div>
        </div>
    ); 
}

export default BookThumbnail; 