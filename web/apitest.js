const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
        "x-rapidapi-key": "SIGN-UP-FOR-KEY"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});