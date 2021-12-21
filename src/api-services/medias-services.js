import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "http://localhost:8080/api/v1/books/";

class MediaService {
    getDetailMedia (id) {
        return axios.get(API_URL + id + "/medias", {headers: authHeader()});
    }
}

export default new MediaService;