import React, {useEffect, useState} from 'react';
import ProfileService from '../../api-services/profile-service';
import LocalStorageService from "../../services/localStorage";
import {useHistory} from "react-router-dom";
import UploadImageService from '../../api-services/upload-image-service';
import axios from "axios";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProfile() {
    const [imageSelected, setImageSelected] = useState("");
    //const [avatar, setAvatar] = useState();
    const [user, setUser] = useState({
        username: '',
        fullname: '',
        avatar: '',
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
        console.log(user.gender)
        if(user.gender != 'FEMALE' && user.gender != 'MALE' && user.gender !== undefined && user.gender != '') {
            toast.error("Gender must be FEMALE or MALE.",{position: toast.POSITION.BOTTOM_LEFT});
        }
        else {
            const res = ProfileService.editProfileUser(userID, user.username, user.email, user.fullname, user.avatar, user.DoB, user.gender, user.phone, user.address, user.payment);
            console.log(res)
            history.push({
                pathname: '/profile',
            });
        }
    }

    const makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "q6itp6nm");
        let imageName = makeid(10);
        formData.append("public_id", imageName)

        if(imageSelected.name != null && (imageSelected.name.slice(-3) == "jpg" || imageSelected.name.slice(-3) == "png")) {
            toast.info("Uploading...",{position: toast.POSITION.BOTTOM_LEFT});
            imageName += "." + imageSelected.name.slice(-3);
            await axios.post("https://api.cloudinary.com/v1_1/dzdq5mium/image/upload", formData
            ).then((response) => {
                console.log(response)
                if (imageName != "") {
                    const link = "https://res.cloudinary.com/dzdq5mium/image/upload/v1635087942/" + imageName;
                    console.log(user.avatar)
                    setUser({...user, avatar: link})
                    imageName = "";
                    if(response) {toast.success("Upload image successfully...",{position: toast.POSITION.BOTTOM_LEFT});}
                }
            })
        }
        else {
            toast.error("Please choose correct type (jpg, png).",{position: toast.POSITION.BOTTOM_LEFT});
        }
        console.log(user)
    }

    return (
        <div>
            <ToastContainer />
            <div className="row profile-row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className='profile-col'>
                        <div>
                            <img className='profile-avatar' src={user.avatar === '' || typeof user.avatar ==='undefined' ? defaultAvatar : user.avatar}></img>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
                            <input type="file" accept="image/png, image/jpg"  style={{border: '1px solid grey'}} onChange={(event) => setImageSelected(event.target.files[0])}  className="custom-file-input"/>
                            <button onClick={handleUpload} style={{backgroundColor: '#ffc700', border: '1px solid grey'}}>Upload</button>
                        </div>
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
                            <input className="inf-input form-control" type="text" name="username" value={user.username}  onChange={handleChange} readOnly></input>
                            <input className="inf-input form-control" type="text" name="fullname" value={user.fullname} onChange={handleChange}/>
                            <input className="inf-input form-control" type="date" name="DoB" value={user.DoB == null ? user.DoB : user.DoB.slice(0,10)} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" placeholder="Only FEMALE or MALE" name="gender" value={user.gender} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="phone" value={user.phone} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="address" value={user.address} onChange={handleChange}/>
                            <input className="inf-input form-control" type="text" name="email" value={user.email} onChange={handleChange} readOnly/>
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
