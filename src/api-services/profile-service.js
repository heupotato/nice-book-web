import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/users/";

class ProfileService{
    getProfileUser(userID){
        return axios.get(API_URL + userID, {headers: authHeader()})
    }
}

export default new ProfileService;