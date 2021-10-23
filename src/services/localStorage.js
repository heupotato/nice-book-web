import jwtDecode from "jwt-decode";
class LocalStorageService{
    static get userID(){
        let token = LocalStorageService.token; 
        if (token === "") return ""; 
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmNjYTgwMThmNDUxMDU3YTQ0NmZmMiIsInNjb3BlIjoiVVNFUiIsImlhdCI6MTYzNDkxOTMxMCwiZXhwIjoxNjM1NTI0MTEwfQ.rUaiS0z4ziAueR7nbJC8SicbpInDQi2Aelo6BKaBVts"; 
        const user = jwtDecode(token);  
        return user.id; 
    }

    static get token(){
        return localStorage.getItem('accessToken'); 
    }

    static get fullname(){
        return localStorage.getItem('fullname'); 
    }
}

export default LocalStorageService