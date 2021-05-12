//QUOTES Logic
function showQuotes() {
    const mumsQuotes = [

        ' "It is because i love you i correct you." ',
        ' "Remember whose child you are!" ',
        ' "My Job as a parent is to train you and direct you to your Heavenly father " ',
        ' "I Love You" '
    ]
    let display = document.getElementById('quotes');

    let randomNumber = Math.floor(Math.random() * mumsQuotes.length);
    display.innerHTML = mumsQuotes[randomNumber];

    setTimeout(showQuotes, 3500);
}
showQuotes();

function showBirthdayWishes() {
    const birthdayWishes = [
        ' "Happy birthday to my dearest mother! You are my mom, my best friend, my teacher, my mentor, and advisor. I love you from the Bottom of my Heart. You\'ve always been the wind that helped the boat of my life sail through high tides, choppy waters, and endless storms. In every smile, every tear and every cheer you were always there for me though the years supporting me and providing me with all the energy i needed in order to stand in the game called life. Every time you insist me to do something, i thought that you were bogging me down. However, in hindsight, i have realized that you are just actually trying to give me wings so i can fly on my own. Every year you win the prize: \"The best mother in the world.\" No one can replace you in my heart. You are the most important woman in my life. I know you have everything in the world so if there is one thing i want to wish for you, it would be good health and more years to spend with your children and grandchildren. You are rare like a diamond, your beauty is a goddess and pure like an angel. I can\'t tell you how blessed i am to have a mother like you. I believe in superheroes. I believe in miracles, i believe in blessings. I believe in good luck, i believe in destiny. Because i find all these in my mom, who is my everything. So once again, Happy birthday mom❤️❤️❤️" <br> - ORE',
        ' "Happy birthday mum, I love you so much❤️" <br> - KING DAVID ',
        ' "Mummy, mummy! Happy 50th Ma. I love you so much ❤ \nI pray that God continues to increase even as you enter this new milestone." <br> - BISOLA '
    ]

    let wishes = document.getElementById('birthday-wishes');

    let randomNumber = Math.floor(Math.random() * birthdayWishes.length);
    wishes.innerHTML = birthdayWishes[randomNumber];

    setTimeout(showBirthdayWishes, 3500);

}
showBirthdayWishes();



//slider
var slideIndex = 0;
showSlides();


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3500); // Change image every  seconds 
}

var string = "Happy Birthday Mum !!! Have An Amazing Day ❤️"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 70); /* change 70 for speed */

}
frameLooper();