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
            articlesArray = [''];
            articlesURL = [''];
            articlesImage = [''];
            for (var i = 0; i < 10; i++) {
                articlesArrayNYT.push(data.results[i].title);
                articlesURLNYT.push(data.results[i].url);
                //articlesImage.push(data.results[i].media[0])
            }
        })
        .catch(err => console.log(err));
};

function fetchFromWebTheGuardian() {
    fetch('https://content.guardianapis.com/search?section=news&q=World%20news&api-key=cdf54eb4-5472-4885-a8b1-e4757af520a3')
        .then(res => res.json())
        .then(data => {
            articlesArray = [''];
            articlesURL = [''];
            articlesImage = [''];
            for (var i = 0; i < 10; i++) {
                articlesArrayTG.push(data.response.results[i].webTitle);
                articlesURLTG.push(data.response.results[i].webUrl);
            }
        })
        .catch(err => console.log(err));
};

function addFetchedTextNYT() {
    var one = document.getElementById('oneNYT');
    one.innerHTML = articlesArrayNYT[1] + " " + "<br> <a href=" + articlesURLNYT[1] + ">read more</a>";

    var one = document.getElementById('twoNYT');
    one.innerHTML = articlesArrayNYT[2] + " " + "<br> <a href=" + articlesURLNYT[2] + ">read more</a>";

    var one = document.getElementById('threeNYT');
    one.innerHTML = articlesArrayNYT[3] + " " + "<br> <a href=" + articlesURLNYT[3] + ">read more</a>";

    var one = document.getElementById('fourNYT');
    one.innerHTML = articlesArrayNYT[4] + " " + "<br> <a href=" + articlesURLNYT[4] + ">read more</a>";

    var one = document.getElementById('fiveNYT');
    one.innerHTML = articlesArrayNYT[5] + " " + "<br> <a href=" + articlesURLNYT[5] + ">read more</a>";

    var one = document.getElementById('sixNYT');
    one.innerHTML = articlesArrayNYT[6] + " " + "<br> <a href=" + articlesURLNYT[6] + ">read more</a>";

    var one = document.getElementById('sevenNYT');
    one.innerHTML = articlesArrayNYT[7] + " " + "<br> <a href=" + articlesURLNYT[7] + ">read more</a>";

    var one = document.getElementById('eightNYT');
    one.innerHTML = articlesArrayNYT[8] + " " + "<br> <a href=" + articlesURLNYT[8] + ">read more</a>";
};

function addFetchedTextTG() {
    var one = document.getElementById('oneNYT');
    one.innerHTML = articlesArrayTG[1] + " " + "<br> <a href=" + articlesURLTG[1] + ">read more</a>";

    var one = document.getElementById('twoNYT');
    one.innerHTML = articlesArrayTG[2] + " " + "<br> <a href=" + articlesURLTG[2] + ">read more</a>";

    var one = document.getElementById('threeNYT');
    one.innerHTML = articlesArrayTG[3] + " " + "<br> <a href=" + articlesURLTG[3] + ">read more</a>";

    var one = document.getElementById('fourNYT');
    one.innerHTML = articlesArrayTG[4] + " " + "<br> <a href=" + articlesURLTG[4] + ">read more</a>";

    var one = document.getElementById('fiveNYT');
    one.innerHTML = articlesArrayTG[5] + " " + "<br> <a href=" + articlesURLTG[5] + ">read more</a>";

    var one = document.getElementById('sixNYT');
    one.innerHTML = articlesArrayTG[6] + " " + "<br> <a href=" + articlesURLTG[6] + ">read more</a>";

    var one = document.getElementById('sevenNYT');
    one.innerHTML = articlesArrayTG[7] + " " + "<br> <a href=" + articlesURLTG[7] + ">read more</a>";

    var one = document.getElementById('eightNYT');
    one.innerHTML = articlesArrayTG[8] + " " + "<br> <a href=" + articlesURLTG[8] + ">read more</a>";
};


// fetching the weather widget 

function weatherWidget() {
    fetch('http://api.weatherapi.com/v1/current.json?key=b1a0ab0812724074b99200953221702&q=Toronto&aqi=no')
        .then(res => res.json())
        .then(data => {
            console.log(data.current.condition.text + " Current temp: " + data.current.temp_c + " Feels like: " + data.current.feelslike_c);
        })
        .catch(err => console.log(err));
};


function f1() {
    alert('Booya kasha')
}
