export const baseURL = "http://localhost:5000";

const summaryApi = {
    register : {
        url : `/api/user/register`,
        method : "POST"
    },
    login : {
        url : `/api/user/login`,
        method : "POST"
    },
    forgotPassword : {
        url : `/api/user/forgot-password`,
        method : "PUT"
    },
    verifyotp :{
        url : `/api/user/verify-otp`,
        method : "PUT"
    },
    resetPassword : {
        url : `/api/user/reset-password`,
        method : "PUT"
    },
    refreshToken : {
        url : `/api/user/refresh-token`,
        method : "POST"
    },
    logout : {
        url : `/api/user/logout`,
        method : "GET"
    },
    updateAvatar : {
        url : `/api/user/update-avatar`,
        method : "PUT"
    },
    userDetails : {
        url : `/api/user/user-details`,
        method : "GET"
    },
    updateUser : {
        url : `/api/user/update-user`,
        method : "PUT"
    },
    verifyEmail : {
        url : `/api/user/verify-email`,
        method : "POST"
    },
    uploadAvatar:{
        url : `/api/user/update-avatar`,
        method : "PUT"
    },
    updateUserDetails : {
        url : `/api/user/update-user`,
        method : "PUT"
    }
 }  

export default summaryApi;