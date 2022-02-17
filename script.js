var articlesArrayNYT = [''];
var articlesURLNYT = [''];
var articlesImageNYT = [''];

var articlesArrayTG = [''];
var articlesURLTG = [''];
var articlesImageTG = [''];

document.onload = fetchFromWebNYT(), fetchFromWebTheGuardian(), weatherWidget();


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
            //articlesImageNYT = [''];   // when TG images are added - delete line
            for (var i = 0; i < 10; i++) {
                articlesArrayTG.push(data.response.results[i].webTitle);
                articlesURLTG.push(data.response.results[i].webUrl);
            }
        })
        .catch(err => console.log(err));
};

function addFetchedTextNYT() {
    var one = document.getElementById('one');
    one.innerHTML = articlesArrayNYT[1] + " " + "<br> <a href=" + articlesURLNYT[1] + ">read more</a>";
    document.getElementById("img1").src = articlesImageNYT[1];


    var one = document.getElementById('two');
    one.innerHTML = articlesArrayNYT[2] + " " + "<br> <a href=" + articlesURLNYT[2] + ">read more</a>";
    document.getElementById("img2").src = articlesImageNYT[2];

    var one = document.getElementById('three');
    one.innerHTML = articlesArrayNYT[3] + " " + "<br> <a href=" + articlesURLNYT[3] + ">read more</a>";
    document.getElementById("img3").src = articlesImageNYT[3];

    var one = document.getElementById('four');
    one.innerHTML = articlesArrayNYT[4] + " " + "<br> <a href=" + articlesURLNYT[4] + ">read more</a>";
    document.getElementById("img4").src = articlesImageNYT[4];

    var one = document.getElementById('five');
    one.innerHTML = articlesArrayNYT[5] + " " + "<br> <a href=" + articlesURLNYT[5] + ">read more</a>";
    document.getElementById("img5").src = articlesImageNYT[5];

    var one = document.getElementById('six');
    one.innerHTML = articlesArrayNYT[6] + " " + "<br> <a href=" + articlesURLNYT[6] + ">read more</a>";
    document.getElementById("img6").src = articlesImageNYT[6];

    var one = document.getElementById('seven');
    one.innerHTML = articlesArrayNYT[7] + " " + "<br> <a href=" + articlesURLNYT[7] + ">read more</a>";
    document.getElementById("img7").src = articlesImageNYT[7];

    var one = document.getElementById('eight');
    one.innerHTML = articlesArrayNYT[8] + " " + "<br> <a href=" + articlesURLNYT[8] + ">read more</a>";
    document.getElementById("img8").src = articlesImageNYT[8];
};

function addFetchedTextTG() {
    var one = document.getElementById('one');
    one.innerHTML = articlesArrayTG[1] + " " + "<br> <a href=" + articlesURLTG[1] + ">read more</a>";

    var one = document.getElementById('two');
    one.innerHTML = articlesArrayTG[2] + " " + "<br> <a href=" + articlesURLTG[2] + ">read more</a>";

    var one = document.getElementById('three');
    one.innerHTML = articlesArrayTG[3] + " " + "<br> <a href=" + articlesURLTG[3] + ">read more</a>";

    var one = document.getElementById('four');
    one.innerHTML = articlesArrayTG[4] + " " + "<br> <a href=" + articlesURLTG[4] + ">read more</a>";

    var one = document.getElementById('five');
    one.innerHTML = articlesArrayTG[5] + " " + "<br> <a href=" + articlesURLTG[5] + ">read more</a>";

    var one = document.getElementById('six');
    one.innerHTML = articlesArrayTG[6] + " " + "<br> <a href=" + articlesURLTG[6] + ">read more</a>";

    var one = document.getElementById('seven');
    one.innerHTML = articlesArrayTG[7] + " " + "<br> <a href=" + articlesURLTG[7] + ">read more</a>";

    var one = document.getElementById('eight');
    one.innerHTML = articlesArrayTG[8] + " " + "<br> <a href=" + articlesURLTG[8] + ">read more</a>";
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