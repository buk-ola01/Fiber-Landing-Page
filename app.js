myName = document.getElementsByClassName("my-name");
var myTwitter = "https://twitter.com/JimohAbdulsam1";
myName.addEventListener("click", function () {
     window.location = myTwitter;
});

navMenu = document.getElementsByClassName("navbar");
signInBtn = document.getElementsByClassName("sign-in-sign-up");
menuIcon = document.getElementsByClassName("menu-icon");

menuIcon.addEventListener("click", () => {
     navMenu.classList.toggle("responsive");
});
