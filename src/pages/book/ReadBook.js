import { useEffect, useState } from "react";
import PDFReader from "./PDFReader";
import BookService from "../../api-services/book-service";
import HeaderBook from "../../components/headerBook";
import Audio from "../audio/audio";
function ReadBook({match}) {
    const bookID = match.params.id; 
    console.log(bookID);
    localStorage.setItem("bookID", bookID);
    return (
        <div>
            <HeaderBook/>
            <div className="row profile-row" style={{justifyContent: 'center'}}>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 book-detail" style={{display: 'flex', flexDirection: 'column'}}>
                    <h6 style={{color: '#224362'}}>Home 
                        <i class="fas fa-angle-right" style={{marginLeft: '5px', marginRight: '5px'}}></i>
                        Book
                        <i class="fas fa-angle-right" style={{marginLeft: '5px', marginRight: '5px'}}></i>
                        PDF & Audio
                    </h6>
                    <PDFReader />
                    <Audio />
                </div>
            </div>
        </div>
    )
}

export default ReadBook;