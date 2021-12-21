import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "https://nice-book.herokuapp.com/api/v1/books/";

class MediaService {
    getDetailMedia (id) {
        return axios.get(API_URL + id + "/medias", {headers: authHeader()});
    }
}

export default new MediaService;