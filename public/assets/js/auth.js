function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function checkUser() {
    var myCookie = getCookie("user");

    if (myCookie == null) {
        // do cookie doesn't exist stuff;
        window.location = "http://pokedexauth.ddns.net:5500/app/index.html";
    }
    else {
        // do cookie exists stuff
        console.log(myCookie)
        fetch("http://pokedexauth.ddns.net:5000/check/?key=" + myCookie, {
        method: "POST"
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        }
}

function checkLogedin() {
    var myCookie = getCookie("user");

    if (myCookie == null) {
        // do cookie doesn't exist stuff;
        console.log('notSignedin')
    }
    else {
        // do cookie exists stuff
        window.location = "http://pokedexauth.ddns.net:5500/app/main.html";
    }
}

function userLogout() {
    var myCookie = getCookie("user");
    document.cookie = "user=" + myCookie + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.pokedexauth.ddns.net;";
    window.location = "http://pokedexauth.ddns.net:5500/app/index.html";
}