import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/books/";

class BookService {
    async getDetailBook (id) {
        return await axios.get(API_URL + id);
    }

    async searchBook (val) {
        const filter = JSON.stringify(val)
        //console.log(JSON.stringify(filter))
        return await axios.get("http://localhost:8080/api/v1/books" + "?filter=" + JSON.stringify(filter)
        ).then(res => {
            return res.data.docs;
        }, error => {
            return error.response.data;
        })
    }

    async getAllGenres() {
        return await axios.get(API_URL + "genres", {headers: authHeader()})  
    }
}

export default new BookService;