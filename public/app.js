var articlesArrayNYT = [''];
var articlesURLNYT = [''];
var articlesImageNYT = [''];

var articlesArrayTG = [''];
var articlesURLTG = [''];
var articlesImageTG = [''];

var articlesArrayGN = [''];
var articlesURLGN = [''];
var articlesImageGN = [''];

var articlesArrayBBC = [''];
var articlesURLBBC = [''];
var articlesImageBBC = [''];


document.onload =
    fetchFromWebNYT(),
    fetchFromWebTheGuardian(),
    weatherWidget(),
    setDateAndTime(),
    fetchExchangeRates(),
    fetchFromWebGnews(),
    fetchFromWebBBC();


function setDateAndTime() {
    var currDate = new Date();
    var today = currDate.getFullYear() + '/' + (currDate.getMonth() + 1) + '/' + currDate.getDate();
    var currTime = new Date();
    var now = currTime.getHours() + ':' + currTime.getMinutes();
    document.getElementById('date').innerHTML = today;
    document.getElementById('time').innerHTML = 'EST ' + now;
};



function fetchExchangeRates() {
    fetch('https://freecurrencyapi.net/api/v2/latest?apikey=256b0ba0-9079-11ec-a76b-c13b60cff3d9')
        .then(res => res.json())
        .then(data => {
            document.getElementById('CAD').innerHTML = data.data.CAD + " 🇨🇦";
            document.getElementById('CZK').innerHTML = data.data.CZK + " 🇨🇿";
            document.getElementById('KZT').innerHTML = data.data.KZT + " 🇰🇿";
        })
        .catch(err => console.log(err));
};

function fetchFromWebNYT() {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=O3v5GAmiIwHIAd38835wV2WVXxKxmjoO')
        .then(res => res.json())
        .then(data => {
            articlesArrayNYT = [''];
            articlesURLNYT = [''];
            articlesImageNYT = [''];
            for (var i = 0; i < 10; i++) {
                articlesArrayNYT.push(data.results[i].title);
                articlesURLNYT.push(data.results[i].url);
                articlesImageNYT.push(data.results[i].media[0]["media-metadata"][2].url)
            }
        })
        .catch(err => console.log(err));
};

function fetchFromWebTheGuardian() {
    fetch('https://content.guardianapis.com/search?section=news&q=World%20news&api-key=cdf54eb4-5472-4885-a8b1-e4757af520a3')
        .then(res => res.json())
        .then(data => {
            articlesArrayTG = [''];
            articlesURLTG = [''];
            articlesImageTG = [''];
            logoTG = 'https://1000logos.net/wp-content/uploads/2021/05/The-Guardian-logo.png'
            for (var i = 0; i < 10; i++) {
                articlesArrayTG.push(data.response.results[i].webTitle);
                articlesURLTG.push(data.response.results[i].webUrl);
                articlesImageTG.push(logoTG);
            }
        })
        .catch(err => console.log(err));
};

function fetchFromWebGnews() {
    fetch('https://gnews.io/api/v4/search?q=example&token=674049e8bdccc70876cee79c89160e93')

        .then(res => res.json())
        .then(data => {
            articlesArrayGN = [''];
            articlesURLGN = [''];
            articlesImageGN = [''];
            for (var i = 0; i < 10; i++) {
                articlesArrayGN.push(data.articles[i].title);
                articlesURLGN.push(data.articles[i].url);
                articlesImageGN.push(data.articles[i].image)
            }
        })
        .catch(err => console.log(err));
};

function fetchFromWebBBC() {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a1251c7ac6624dbeabccb96f7a7a9ac8')

        .then(res => res.json())
        .then(data => {
            articlesArrayBBC = [''];
            articlesURLBBC = [''];
            articlesImageBBC = [''];
            for (var i = 0; i < 8; i++) {
                articlesArrayBBC.push(data.articles[i].description);
                articlesURLBBC.push(data.articles[i].url);
                articlesImageBBC.push(data.articles[i].urlToImage);
            }
        })
        .catch(err => console.log(err));
};

function addFetchedTextNYT() {
    var one = document.getElementById('one');
    one.innerHTML = articlesArrayNYT[1] + " " + "<p></p><a href=" + articlesURLNYT[1] + ">read more</a> <hr>";
    document.getElementById("img1").src = articlesImageNYT[1];

    var one = document.getElementById('two');
    one.innerHTML = articlesArrayNYT[2] + " " + "<br> <a href=" + articlesURLNYT[2] + ">read more</a> <hr>";
    document.getElementById("img2").src = articlesImageNYT[2];

    var one = document.getElementById('three');
    one.innerHTML = articlesArrayNYT[3] + " " + "<br> <a href=" + articlesURLNYT[3] + ">read more</a> <hr>";
    document.getElementById("img3").src = articlesImageNYT[3];

    var one = document.getElementById('four');
    one.innerHTML = articlesArrayNYT[4] + " " + "<br> <a href=" + articlesURLNYT[4] + ">read more</a> <hr>";
    document.getElementById("img4").src = articlesImageNYT[4];

    var one = document.getElementById('five');
    one.innerHTML = articlesArrayNYT[5] + " " + "<br> <a href=" + articlesURLNYT[5] + ">read more</a> <hr>";
    document.getElementById("img5").src = articlesImageNYT[5];

    var one = document.getElementById('six');
    one.innerHTML = articlesArrayNYT[6] + " " + "<br> <a href=" + articlesURLNYT[6] + ">read more</a> <hr>";
    document.getElementById("img6").src = articlesImageNYT[6];

    var one = document.getElementById('seven');
    one.innerHTML = articlesArrayNYT[7] + " " + "<br> <a href=" + articlesURLNYT[7] + ">read more</a> <hr>";
    document.getElementById("img7").src = articlesImageNYT[7];

    var one = document.getElementById('eight');
    one.innerHTML = articlesArrayNYT[8] + " " + "<br> <a href=" + articlesURLNYT[8] + ">read more</a> <hr>";
    document.getElementById("img8").src = articlesImageNYT[8];
};

function addFetchedTextTG() {
    var one = document.getElementById('one');
    one.innerHTML = articlesArrayTG[1] + " " + "<br> <a href=" + articlesURLTG[1] + ">read more</a> <hr>";
    document.getElementById("img1").src = articlesImageTG[1];

    var one = document.getElementById('two');
    one.innerHTML = articlesArrayTG[2] + " " + "<br> <a href=" + articlesURLTG[2] + ">read more</a> <hr>";
    document.getElementById("img2").src = articlesImageTG[2];

    var one = document.getElementById('three');
    one.innerHTML = articlesArrayTG[3] + " " + "<br> <a href=" + articlesURLTG[3] + ">read more</a> <hr>";
    document.getElementById("img3").src = articlesImageTG[3];

    var one = document.getElementById('four');
    one.innerHTML = articlesArrayTG[4] + " " + "<br> <a href=" + articlesURLTG[4] + ">read more</a> <hr>";
    document.getElementById("img4").src = articlesImageTG[4];

    var one = document.getElementById('five');
    one.innerHTML = articlesArrayTG[5] + " " + "<br> <a href=" + articlesURLTG[5] + ">read more</a> <hr>";
    document.getElementById("img5").src = articlesImageTG[5];

    var one = document.getElementById('six');
    one.innerHTML = articlesArrayTG[6] + " " + "<br> <a href=" + articlesURLTG[6] + ">read more</a> <hr>";
    document.getElementById("img6").src = articlesImageTG[6];

    var one = document.getElementById('seven');
    one.innerHTML = articlesArrayTG[7] + " " + "<br> <a href=" + articlesURLTG[7] + ">read more</a> <hr>";
    document.getElementById("img7").src = articlesImageTG[7];

    var one = document.getElementById('eight');
    one.innerHTML = articlesArrayTG[8] + " " + "<br> <a href=" + articlesURLTG[8] + ">read more</a> <hr>";
    document.getElementById("img8").src = articlesImageTG[8];
};

function addFetchedTextGN() {
    var one = document.getElementById('one');
    one.innerHTML = articlesArrayGN[1] + " " + "<p></p><a href=" + articlesURLGN[1] + ">read more</a> <hr>";
    document.getElementById("img1").src = articlesImageGN[1];

    var one = document.getElementById('two');
    one.innerHTML = articlesArrayGN[2] + " " + "<br> <a href=" + articlesURLGN[2] + ">read more</a> <hr>";
    document.getElementById("img2").src = articlesImageGN[2];

    var one = document.getElementById('three');
    one.innerHTML = articlesArrayGN[3] + " " + "<br> <a href=" + articlesURLGN[3] + ">read more</a> <hr>";
    document.getElementById("img3").src = articlesImageGN[3];

    var one = document.getElementById('four');
    one.innerHTML = articlesArrayGN[4] + " " + "<br> <a href=" + articlesURLGN[4] + ">read more</a> <hr>";
    document.getElementById("img4").src = articlesImageGN[4];

    var one = document.getElementById('five');
    one.innerHTML = articlesArrayGN[5] + " " + "<br> <a href=" + articlesURLGN[5] + ">read more</a> <hr>";
    document.getElementById("img5").src = articlesImageGN[5];

    var one = document.getElementById('six');
    one.innerHTML = articlesArrayGN[6] + " " + "<br> <a href=" + articlesURLGN[6] + ">read more</a> <hr>";
    document.getElementById("img6").src = articlesImageGN[6];

    var one = document.getElementById('seven');
    one.innerHTML = articlesArrayGN[7] + " " + "<br> <a href=" + articlesURLGN[7] + ">read more</a> <hr>";
    document.getElementById("img7").src = articlesImageGN[7];

    var one = document.getElementById('eight');
    one.innerHTML = articlesArrayGN[8] + " " + "<br> <a href=" + articlesURLGN[8] + ">read more</a> <hr>";
    document.getElementById("img8").src = articlesImageGN[8];
};


function addFetchedTextBBC() {
    var one = document.getElementById('one');
    one.innerHTML = articlesArrayBBC[1] + " " + "<p></p><a href=" + articlesURLBBC[1] + ">read more</a> <hr>";
    document.getElementById("img1").src = articlesImageBBC[1];
    console.log(articlesImageBBC[1])

    var one = document.getElementById('two');
    one.innerHTML = articlesArrayBBC[2] + " " + "<br> <a href=" + articlesURLBBC[2] + ">read more</a> <hr>";
    document.getElementById("img2").src = articlesImageBBC[2];

    var one = document.getElementById('three');
    one.innerHTML = articlesArrayBBC[3] + " " + "<br> <a href=" + articlesURLBBC[3] + ">read more</a> <hr>";
    document.getElementById("img3").src = articlesImageBBC[3];

    var one = document.getElementById('four');
    one.innerHTML = articlesArrayBBC[4] + " " + "<br> <a href=" + articlesURLBBC[4] + ">read more</a> <hr>";
    document.getElementById("img4").src = articlesImageBBC[4];

    var one = document.getElementById('five');
    one.innerHTML = articlesArrayBBC[5] + " " + "<br> <a href=" + articlesURLBBC[5] + ">read more</a> <hr>";
    document.getElementById("img5").src = articlesImageBBC[5];

    var one = document.getElementById('six');
    one.innerHTML = articlesArrayBBC[6] + " " + "<br> <a href=" + articlesURLBBC[6] + ">read more</a> <hr>";
    document.getElementById("img6").src = articlesImageBBC[6];

    var one = document.getElementById('seven');
    one.innerHTML = articlesArrayBBC[7] + " " + "<br> <a href=" + articlesURLBBC[7] + ">read more</a> <hr>";
    document.getElementById("img7").src = articlesImageBBC[7];

    var one = document.getElementById('eight');
    one.innerHTML = articlesArrayBBC[8] + " " + "<br> <a href=" + articlesURLBBC[8] + ">read more</a> <hr>";
    document.getElementById("img8").src = articlesImageBBC[8];
};


// fetching the weather widget 

function weatherWidget() {
    fetch('http://api.weatherapi.com/v1/current.json?key=b1a0ab0812724074b99200953221702&q=Toronto&aqi=no')
        .then(res => res.json())
        .then(data => {
            var imgUrl = "https://" + data.current.condition.icon.slice(2)
            document.getElementById('weatherIcon').src = imgUrl;
            document.getElementById('weatherText').innerHTML = data.current.condition.text;
            document.getElementById('temp_c').innerHTML = data.current.temp_c + '°C';
            document.getElementById('feelsTemp_c').innerHTML = 'Feels like ' + data.current.feelslike_c + '°C';
        })
        .catch(err => console.log(err));
};

function f1() {
    alert('Booya kasha')
}


// ***********************************************
//          Geolocation
// ***********************************************

function getCity(lat, lon) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.64791e25137e71792cfbf3edcf428d25&lat=" +
        lat + "&lon=" + lon + "&zoom=10&format=json", true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('location').innerHTML = response.address.city;
            return;
        }
    }
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude
    getCity(lat, lon);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);