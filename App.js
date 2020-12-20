// console.log('script is working')
// var username = prompt("give me your name")
// var welcomePage = "this script is working " + username;
// alert(welcomePage);


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



//querySelector is the way to tell the browser to select this element which has id btn-translate
//query selector works on the principle of css selector . it selects and returns the first element which matches the query.
btnTranslate.addEventListener("click", () => {
    // console.log("clicked");
    // console.log("input Received:" , txtInput.value);
    outputDiv.innerText = "hfgjdsufusf " + txtInput.value;

})



