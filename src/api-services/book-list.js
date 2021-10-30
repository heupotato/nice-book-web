import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/users/";

class BookListService{
    getReadings(userID){
        // return axios.get(API_URL + userID + "/books/reading"); 
        //if header is necessary, uncomment this code
        return axios.get(API_URL + userID + "/books/reading", {headers: authHeader()}); 
    }

    getFavourites(userID){
        return axios.get(API_URL + userID + "/books/favorites", {headers: authHeader()}); 
    }

    getReadLater(userID){
        return axios.get(API_URL + userID + "/books/readAfter", {headers: authHeader()}); 
    }
}

export default new BookListService; 