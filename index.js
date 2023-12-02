var bgImage = document.getElementById('bg');
var bgCoverImage = document.getElementById('bg_cover');
var ImageTsukihime = document.getElementById('Tsukihime');
var ImageMarisha = document.getElementById('Marisha');
var ImageBurningSpeed = document.getElementById('BurningSpeed');
var images = [
    './assets/Main/1.png', 
    './assets/Main/2.png', 
    './assets/Main/3.png', 
    './assets/Main/4.png', 
    './assets/Main/5.png', 
    './assets/Main/6.png', 
    './assets/Main/7.png', 
    './assets/Main/8.png', 
    './assets/Main/9.png', 
    './assets/Main/10.png'
];

var imagesT = [
    './assets/Tsukihime/1.png', 
    './assets/Tsukihime/2.png', 
    './assets/Tsukihime/3.png', 
    './assets/Tsukihime/4.png', 
    './assets/Tsukihime/5.png'
];

var imagesM = [
    './assets/Marisha/1.png'
];

var imagesBS = [
    './assets/BurningSpeed/1.png', 
    './assets/BurningSpeed/2.png', 
    './assets/BurningSpeed/3.png', 
    './assets/BurningSpeed/4.png'
];

function getRandomImage(imagesArray) {
    var randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
}


var randomImage = getRandomImage(images);
bgImage.src = randomImage;
bgCoverImage.src = randomImage;

function getRandomImageT(imagesArray) {
    var randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
}


var randomImageT = getRandomImageT(imagesM);
Marisha.src = randomImageT;

function getRandomImageM(imagesArray) {
    var randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
}


var randomImageM = getRandomImageM(imagesT);
Tsukihime.src = randomImageM;

function getRandomImage(imagesArray) {
    var randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
}


var randomImageBS = getRandomImage(imagesBS);
BurningSpeed.src = randomImageBS;
