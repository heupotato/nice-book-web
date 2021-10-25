import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/medias/";

class UploadImageService {
    async uploadImage (item) {
        return await axios.post(API_URL + "upload",
            item, {headers: authHeader()}
        ).then(res => {
                return res.data.body[0];
            }, error => {
                console.log(error.response.data)
                return error.response.data;
            })
    }
}

export default new UploadImageService;
