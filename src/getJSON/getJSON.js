const GetJSON = (url, callback) => {
    const xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET', url, true);
    xmlhttprequest.responseType = 'json';
    
    xmlhttprequest.onload = function () {
        const status = xmlhttprequest.status;
        
        if(status == 200) {
            callback(null, xmlhttprequest.response);
        } else {
            callback(status, xmlhttprequest.response);
        }
    };
    
    xmlhttprequest.send();
}

export default GetJSON;