function createCookie(cookieName, cookieValue, time) {

    var date = new Date();
    date.setDate( date.getDate() + time );
    date.setHours(9);
    date.setMinutes(0);
    date.setSeconds(0);

    var cookie = "";
    cookie += cookieName + "=" + cookieValue + "; ";
    cookie += "expires=" + date.toUTCString() + "; ";

    document.cookie = cookie;
}

function getCookie(find) {

    var cookies = document.cookie.split("; ");

    for(var i in cookies) {
        if(cookies[i].indexOf(find) != -1 ) { //쿠키이름이 존재함
            
            var value = cookies[i].replace(find+"=", "");
            return value; //쿠키값을 반환
        }
    }

}