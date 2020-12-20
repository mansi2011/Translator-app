// console.log('script is working')
// var username = prompt("give me your name")
// var welcomePage = "this script is working " + username;
// alert(welcomePage);


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



//querySelector is the way to tell the browser to select this element which has id btn-translate
//query selector works on the principle of css selector . it selects and returns the first element which matches the query.

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var url = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text){
    return url + "?" +"text="+ text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something happened! try again after some time!")
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedOutput = json.contents.translated;
        outputDiv.innerText = translatedOutput;
        // console.log(json.contents.translated)
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)
    // console.log("clicked");
    // console.log("input Received:" , txtInput.value);
    // outputDiv.innerText = "hfgjdsufusf " + txtInput.value;





