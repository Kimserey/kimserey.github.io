// Some messages for you :)
var messages = [
    "Hello there! Welcome to kimsereylam.com, I am Kimserey nice to meet you :)",
    "Hey thanks for visiting my website :). You are the best!",
    "Hoho how are you today? You look good :)",
    "Fancy a beer? Hit me on Twitter @Kimserey_Lam :)",
    "Thanks for passing by! Have a nice day! :)",
    "I am posting lot of new content on my blog! Don't forget to have a look! :)",
    "You look good today! Did you change your haircut?",
    "Hey thanks for showing up on my website! Have a good day! :)"
];

// Random method: http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
var message = messages[Math.floor(Math.random() * messages.length)];

document.addEventListener("DOMContentLoaded", function(event) {
    var elt = document.getElementById("footerText");
    elt.textContent = message;
    elt.addEventListener("click", function(ev) {
        location.reload();
    });
});