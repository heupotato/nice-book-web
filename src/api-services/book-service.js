import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/books/";

class BookService {
    async getDetailBook (id) {
        //return await axios.get(API_URL + id);
        return await axios.get(API_URL + id, {headers: authHeader()});
    }
}

export default new BookService;