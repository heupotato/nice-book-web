import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/books/";

class BookService {
    async getDetailBook (id) {
        //return await axios.get(API_URL + id);
        return await axios.get(API_URL + id, {headers: authHeader()});
    }

    async searchBook (filter) {
        console.log(JSON.stringify(filter))
        return await axios.get("http://localhost:8080/api/v1/books" + "?filter=" + JSON.stringify(filter) ,{headers: authHeader()}
        ).then(res => {
            return res.data.docs[0];
        }, error => {
            return error.response.data;
        })
    }
}

export default new BookService;