import React, {useEffect, useState} from 'react';
import ProfileService from '../../api-services/profile-service';
import LocalStorageService from "../../services/localStorage";
import {useHistory} from "react-router-dom";
import UploadImageService from '../../api-services/upload-image-service';
import typeOf from "validator/es/lib/util/typeOf";
import axios from "axios";
import buffer from 'buffer';

function EditProfile() {
    const [eventImg, setEventImg] = useState({
        image : null,
    })
    const [base64Img, setBase64Img] = useState('')
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
        const res = ProfileService.editProfileUser(userID, user.username, user.email, user.fullname, user.DoB, user.gender, user.phone, user.address, user.payment);
        console.log(res)
        history.push({
            pathname: '/profile',
        });
    }

    const callUploadService = () => {
        let type = "image/png";
        let fileName = "avatar.png";
        let folderPrefix = "users";
        console.log(type)
        console.log(fileName)
        console.log(folderPrefix)
        const upload = [
            {
                type: type,
                fileName: fileName,
                folderPrefix: folderPrefix
            }
        ]
        console.log(typeOf(upload))
        const linkAmazon = UploadImageService.uploadImage(upload);
        console.log(linkAmazon)
        console.log(base64Img)
        //const res2 = axios.put(linkAmazon.link, base64Img, {headers: { 'Content-Type': 'image/jpeg' }})
        //console.log(res2)
        //user.avatar = res2
    }

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file.image);
        reader.onload = function () {
            setBase64Img(reader.result)
            console.log(base64Img)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleUpload = (evt) => {
        const tmp = evt.target.files[0];
        if (tmp){
            setEventImg({
                ...setEventImg,
                image: tmp
            })
            console.log(eventImg)
            if(eventImg.image !== null) {
                getBase64(eventImg);
                callUploadService();
            }
        }
        else{
            console.log("no img")
        }
    }


    return (
        <div>
            <div className="row profile-row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className='profile-col'>
                        <div>
                            <img className='profile-avatar' src={user.avatar === '' || typeof user.avatar ==='undefined' ? defaultAvatar : user.avatar}></img>
                        </div>
                        <input type="file"  onChange={handleUpload}  className="custom-file-input"/>
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
                            <input className="inf-input form-control" type="date" name="DoB" value={user.DoB.slice(0,10)} onChange={handleChange}/>
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
