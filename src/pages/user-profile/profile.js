import { useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";
import ProfileService from "../../api-services/profile-service";
import Divider from "../../components/divider";
import moment from "moment";
import LocalStorageService from "../../services/localStorage";
import BookListService from "../../api-services/book-list";
import BookThumbnail from "../../components/book-thumbnail";


function UserProfile()
{
    //NOTE: For API: After login, store userID in localStorage and uncomment the line below
    // var userID = '616cca8018f451057a446ff2';

    const defaultAvatar = 'https://docsbydesign.com/wp-content/uploads/2015/08/readingbook.jpg';

    //NOTE: FOR API: This is mock userID, you should comment it and user the above code
    const history = useHistory();
    var userID = LocalStorageService.userID;

    const [userState, setUser] = useState({
        fullname: '',
        gender: "", //NOTE: Gender: 0 -> male, 1 -> Female
        DoB: '',
        phone: '',
        address: '',
        email: '',
        payment: '',
        avatar: ''
    })

    const handleEdit = () => {
        history.push({
            pathname: '/profile/edit',
        });
    }

    let mockReading = ['https://images-na.ssl-images-amazon.com/images/I/71wdVdp0ncL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81FOFfskpYL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/A1hlZpwiF7L.jpg',
    'https://nhasachphuongnam.com/images/detailed/182/81E1TXOrpML.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71rL00TgB0L.jpg'];

    const [readingState, setReading] = useState();
    const [favouriteState, setFavourite] = useState();
    const [laterState, setLater] = useState();

     //TODO: Check API code here
     useEffect(() => {
        ProfileService.getProfileUser(userID).then(response => {
            setUser(response.data)
        })
        .catch(err => console.log(err))
        BookListService.getReadings(userID).then(response => {
            let bookListData = response.data.reading; 
            let smallList = bookListData.slice(0, 5); 
            var listBookThumb = smallList.map((book) => 
                <div className='book-container'>
                    <img src={book.image} className='book-image'></img>
                </div>
            )
            setReading(listBookThumb); 
        })
        .catch(err => console.log(err))

        BookListService.getFavourites(userID).then(response => {
            let bookListData = response.data.favorites; 
            let smallList = bookListData.slice(0, 5); 
            var listBookThumb = smallList.map((book) => 
                <div className='book-container'>
                    <img src={book.image} className='book-image'></img>
                </div>
            )
            setFavourite(listBookThumb); 
        })
        .catch(err => console.log(err))

        BookListService.getReadLater(userID).then(response => {
            let bookListData = response.data.readLater; 
            let smallList = bookListData.slice(0, 5); 
            var listBookThumb = smallList.map((book) => 
                <div className='book-container'>
                    <img src={book.image} className='book-image'></img>
                </div>
            )
            setLater(listBookThumb); 
        })
        .catch(err => console.log(err))
    }, [])

    // const listReading = readingState.map((bookImg) =>
    //     <div className='book-container'>
    //         <img src={bookImg} className='book-image'></img>
    //     </div>
    // )

    // const listFavourite = favouriteState.map((bookImg) =>
    //     <div className='book-container'>
    //         <img src={bookImg} className='book-image'></img>
    //     </div>
    // )

    // const listLater = laterState.map((bookImg) =>
    //     <div className='book-container'>
    //         <img src={bookImg} className='book-image'></img>
    //     </div>
    // )

    return(
        <div>

            <div class="row profile-row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className='profile-col'>
                        <div>
                            <img className='profile-avatar' src={userState.avatar === '' || typeof userState.avatar ==='undefined' ? defaultAvatar : userState.avatar}></img>
                        </div>
                        <div className='blank'></div>
                        <Divider>PROFILE</Divider>
                        <div className='blank15'></div>
                        <div className='block-center' style={{padding:0}}>
                            <div className='profile-fullname'>{userState.fullname}</div>
                            <button type="button" className="btn btn-primary btn-lg p-edit-button" onClick={handleEdit}>Edit</button>
                        </div>
                        <div className='profile-id'>#{userID.substr(userID.length - 4, 4)}</div>
                        <div className='profile-info'>
                            <div class="row">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 info-title">
                                    <h6>Birthday: </h6>
                                </div>
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 info-content">
                                    <h6>{moment(userState.DoB).format("DD MMMM, YYYY")} </h6>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 info-title">
                                    <h6>Gender: </h6>
                                </div>
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 info-content">
                                    <h6>{userState.gender}</h6>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 info-title">
                                    <h6>Phone: </h6>
                                </div>
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 info-content">
                                    <h6>{userState.phone} </h6>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 info-title">
                                    <h6>Address: </h6>
                                </div>
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 info-content">
                                    <h6>{userState.address} </h6>
                                </div>
                            </div>

                            <div class="row  email-row">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 info-title">
                                    <h6>Email: </h6>
                                </div>
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 info-content">
                                    <h6>{userState.email}</h6>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 info-title">
                                    <h6>Payment: </h6>
                                </div>
                                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 info-content">
                                    <h6>{userState.payment}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 profile-books-col">
                    <div>
                        <div className='block-center' style={{padding:0}}>
                            <div className='book-row-title'>Reading</div>
                            <Link to='/profile/readings' style={{fontFamily: '"Montserrat", sans-serif', color:'black'}}>See more {">>>"} </Link>
                        </div>
                        <div className='blank20'></div>
                        <div className='book-row'>
                            {readingState}
                        </div>

                        <div className='blank20'></div>

                        <div className='block-center' style={{padding:0}}>
                            <div className='book-row-title'>Favourite</div>
                            <Link to='/profile/favourites' style={{fontFamily: '"Montserrat", sans-serif', color:'black'}}>See more {">>>"} </Link>
                        </div>
                        <div className='blank20'></div>
                        <div className='book-row'>
                            {favouriteState}
                        </div>

                        <div className='blank20'></div>

                        <div className='block-center' style={{padding:0}}>
                            <div className='book-row-title'>Read later</div>
                            <Link to='/profile/read-later' style={{fontFamily: '"Montserrat", sans-serif', color:'black'}}>See more {">>>"} </Link>
                        </div>
                        <div className='blank20'></div>
                        <div className='book-row'>
                            {laterState}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
