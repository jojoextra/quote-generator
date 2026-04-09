function newQuote() {

}

var quotes = ["Hello World", "You can do it", "Never give up"];
var random = Math.floor(Math.random() * quotes.length);
document.getElementById("quote").innerText = quotes[random];
