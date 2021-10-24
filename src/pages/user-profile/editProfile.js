import React, {useEffect, useState} from 'react';
import ProfileService from '../../api-services/profile-service';
import LocalStorageService from "../../services/localStorage";
import {useHistory} from "react-router-dom";

function EditProfile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [user, setUser] = useState({
        username: '',
        fullname: '',
        gender: '',
        DoB: '',
        phone: '',
        address: '',
        email: '',
        payment: '',
    });
    const history = useHistory();
    const userID = LocalStorageService.userID;
    const defaultAvatar = 'https://docsbydesign.com/wp-content/uploads/2015/08/readingbook.jpg';

    useEffect(() => {
        ProfileService.getProfileUser(userID).then(response => {
            setUser(response.data);
            console.log(selectedFile);
        })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (val) => {
        setUser({
            ...user,
            [val.target.name]: val.target.value,
        });
    }

    const handleSubmit = () => {
        ProfileService.editProfileUser(userID, user.username, user.email, user.fullname, user.DoB, user.gender, user.phone, user.address, user.payment);
        history.push({
            pathname: '/profile/',
        });
    }

    // const getBase64 = (file, cb) => {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         cb(reader.result)
    //     };
    //     reader.onerror = function (error) {
    //         console.log('Error: ', error);
    //     };
    // }

    const handleUploadImage = () => {
        //console.log(imageUpload[0].name);
    }

    return (
        <div>
            <div className="row profile-row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className='profile-col'>
                        <div>
                            <img className='profile-avatar' src={user.avatar === '' || typeof user.avatar ==='undefined' ? defaultAvatar : user.avatar}></img>
                        </div>
                        <input type="file" id="selectedFile" name="selectedFile" className="custom-file-input" value={selectedFile} onChange={(e) => { setSelectedFile(e.target.files[0]); console.log(selectedFile)}}/>
                    </div>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 edit-profile" style={{display: 'flex', flexDirection: 'column'}}>
                    <h1>PROFILE SETTING</h1>
                    <div style={{border: '1px solid black'}}></div>
                    <div className="inf-element" style={{marginTop: '10px'}}>
                        <div>
                            <p className="inf-label-text">ID:</p>
                            <p className="inf-label-text">Username:</p>
                            <p className="inf-label-text">Full name:</p>
                            <p className="inf-label-text">Birth day:</p>
                            <p className="inf-label-text">Gender:</p>
                            <p className="inf-label-text">Phone:</p>
                            <p className="inf-label-text">Address:</p>
                            <p className="inf-label-text">Email:</p>
                            <p className="inf-label-text">Payment:</p>
                        </div>
                        <div style={{width: '90%'}}>
                            <input className="inf-input form-control" type="text" name="ID" value={userID} readOnly/>
                            <input className="inf-input form-control" type="text" name="username" value={user.username}  onChange={handleChange}></input>
                            <input className="inf-input form-control" type="text" name="fullname" value={user.fullname} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="DoB" value={user.DoB} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="gender" value={user.gender} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="phone" value={user.phone} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="address" value={user.address} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="email" value={user.email} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="payment" value={user.payment} onChange={handleChange}/>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-lg edit-button" onClick={handleSubmit}>SAVE</button>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;
