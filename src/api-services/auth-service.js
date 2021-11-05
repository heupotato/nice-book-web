import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
    async login (email, password) {
        return await axios.post(API_URL + "login", {
            email,
            password
        }).then(res => {
                if (res.data) {
                    localStorage.setItem("user", JSON.stringify(res.data.body));
                    localStorage['email'] = res.data.body.user.email;
                    localStorage['accessToken'] = res.data.body.token;
                    localStorage['username'] = res.data.body.user.username;
                }
                return res.data;
            }, error => {
                return error.response.data;
            }
        )
    }

    async signup (email, username, password) {
        return await axios.post(API_URL + "register", {
            email,
            username,
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
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
    }

    async verifyCode (email, code) {
        return await axios.put(API_URL + "verify", {
            email,
            code
        }).then(res => {
            return res.data;
        }, error => {
            return error.response.data;
        })
    }

    async resendCode (email) {
        return await axios.put(API_URL + "resend-verify-code", {
            email
        }).then(res => { return res.data;
        }, error => {
            return error.response.data;
        })
    }
}

export default new AuthService();
