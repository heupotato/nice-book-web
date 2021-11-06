import axios from "axios";
import authHeader from "./auth-header";
import URLService from "./URL";

//const API_URL = "http://localhost:8080/api/v1/users/";
const API_URL = URLService.NGROK_URL +  "users/";

class ProfileService{
    getProfileUser(userID){
        return axios.get(API_URL + userID, {headers: authHeader()})
    }

    editProfileUser(userID, username, email, fullname, avatar, DoB, gender, phone, address, payment, password){
        return axios.put(API_URL + userID, {
            username,
            email,
            fullname,
            avatar,
            DoB,
            gender,
            phone,
            address,
            payment,
            password
        }, {headers: authHeader()})
            .then(res => {
                    return res.data;
                }, error => {
                    return error.response.data;
                }
            )
    }
}

export default new ProfileService;
