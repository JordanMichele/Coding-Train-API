let videos;
let api = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="
let video = 'dogs';
let apiKey = '&key=AIzaSyArp60-L7MqJOzwbh3mlO8_NtL-Fsh6iys';

let input;

function setUp() {
let button = select('#submit');
button.mousePressed(videoAsk);
input = select('#user-input');
}

function videoAsk() {
	let url = api + input.value() + apiKey;
	loadJSON(url);
	let url = api + input.value() + apiKey;
	console.log(url);
}


function gotVideo(data) {
	videos = data;
}

function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

