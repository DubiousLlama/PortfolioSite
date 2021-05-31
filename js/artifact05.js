var myImages =["data/images/slideshow00.jpg", 
                "data/images/slideshow01.jpg", 
                "data/images/slideshow02.jpg",
                "data/images/slideshow03.jpg",
                "data/images/slideshow04.jpg"];


var captionImages =["Mountain 01 — Evening","Mountain 02 — Range","Mountain 03 — Rocky","Mountain 04 — Snowy Forest","Mountain 05 — Valley"];

var index=0; 

var autoSlideActive = true;
var paused = false;

var bg = document.querySelector("body");
bg.style.setProperty("--image-url", "url(../data/images/slideshow00.jpg)");

function updateImage(){
    bg.style.setProperty("--image-url", "url(../" + myImages[index] + ")");
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
    autoSlideActive = false;
    console.log("Next");
    if (myImages.length == index+1)
    index=0;
    else
    index++;
    updateImage();
} 
 

function back(){
    autoSlideActive = false;
    console.log("Previous");
    if (index===0)
    index=myImages.length-1;
    else
    index--; 
    updateImage();
}

function pause(){
    if (paused === false) {
        paused = true;
        console.log("Paused");
        pauseButton.innerHTML = "UNPAUSE";
    } else {
        paused = false;
        console.log("Unpaused");
        pauseButton.innerHTML = "PAUSE";
    }
}

function autoSlide(){
    if (paused === true) {
        console.log("AutoSlide Inactive");
        return false;
    }
    console.log("AutoSlide Active");
    if (autoSlideActive === true) {
        next();
    } else {
        autoSlideActive = true;
    }
}

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous");
var pauseButton = document.getElementById("pause");  

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);
pauseButton.addEventListener("click",pause,false);  

setInterval(autoSlide,3000);