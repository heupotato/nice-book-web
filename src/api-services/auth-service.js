import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
    async login (email, password) {
        return await axios.post(API_URL + "login", {
            email,
            password
        }).then(res => {
                if (res.data) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    localStorage['email'] = res.data.email;
                    localStorage['password'] = res.data.password;
                    localStorage['accessToken'] = res.data.token;
                }
                return res.data;
            }, error => {
                return error.response.data;
            }
        )
    }

    async signup (email, userName, password) {
        return await axios.post(API_URL + "register", {
            email,
            //NEED_TODO: userName -> username
            userName,
            password
        }).then(res => {
                return res.data;
            }, error => {
                return error.response.data;
            }
        )
    }

    async forgotPassword (email) {
        return await axios.post(API_URL + "forgot-password", {
            email
        }).then(res => {
            return res.data;
        }, error => {
            return error.response.data;
        })
    }

    async resetPassword (email, code, newPassword) {
        return await axios.put(API_URL + "reset-password", {
            email,
            code,
            newPassword
        }).then(res => {
                return res.data;
            }, error => {
                return error.response.data;
            }
        )
    }

    async resendPasswordCode (email) {
        return await axios.put(API_URL + "resend-password-code", {
            email
        }).then(res => {
            return res.data;
        }, error => {
            return error.response.data;
        })
    }

    logout () {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("accessToken");
    }

    async verifyCode (email, code) {
        return await axios.put(API_URL + "verify", {
            email,
            code
        }).then(res => {
                return res.data;
            }, error => {
                return error.response.data;
            }
        )
    }

    async resendCode (email) {
        return await axios.put(API_URL + "resend-verify-code", {
            email
        }).then(res => {
                return res.data;
            }, error => {
                return error.response.data;
            }
        )
    }
}

export default new AuthService();
