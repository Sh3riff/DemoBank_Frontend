const data = JSON.parse(window.localStorage.getItem('authState'));

const accessToken = data.accessToken;
const refreshToken = data.refreshToken;

const requestHeader = { 
        Authorization: accessToken, 
        AuthRefresh: refreshToken
};


export default requestHeader;