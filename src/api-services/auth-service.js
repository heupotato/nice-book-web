import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
    login (email, password) {
        return axios.post(API_URL + "login", {
            email,
            password
        }).then(res => {
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage['email'] = res.data.email;
                localStorage['password'] = res.data.password;
                localStorage['accessToken'] = res.data.token;
            }
            return res.data
        })
    }

    signup (email, userName, password) {
        return axios.post(API_URL + "register", {
            email,
            userName,
            password
        })
    }

    logout () {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("accessToken");
    }

    verify_account (email, code) {
        return axios.put(API_URL + "verify", {
            email,
            code
        })
    }
}

export default new AuthService();

