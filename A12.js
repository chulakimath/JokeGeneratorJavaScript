
let jokes=[];

fetch('./index.json').then(
    response=>response.json()
).then(data=>{
    jokes=data;
})

var completedJokes=[];
function randomNumberGenerator(){
let randomNumber =Math.round(Math.random()*jokes.length-1);
jokeGenerator(randomNumber);
}
function jokeGenerator(randomNumber){
if(completedJokes.length===jokes.length){
    completedJokes=[];
}
if(completedJokes.includes(randomNumber)  || randomNumber<0){
    randomNumberGenerator();
}
else{
    completedJokes.push(randomNumber);
let setup = jokes[randomNumber].setup ;
let delivery = jokes[randomNumber].punchline;
jokeDisplayer(setup,delivery);
}
}
function jokeDisplayer(part1,part2){
let setupDisplay=document.querySelector('.setup');
let deliveryDisplay = document.querySelector('.delivery'); 
    setupDisplay.innerHTML=`<h2>${part1}</h2>`;
    deliveryDisplay.innerHTML=``;
    setupDisplay.addEventListener('click',()=>{
        deliveryDisplay.innerHTML=`<h2>${part2}</h2>`;
        setupDisplay.firstElementChild.style.animation='none';
        setupDisplay.firstElementChild.style.background='antiquewhite';
    });
}
let jokeGeneratorButton=document.querySelector(".getNewJoke");
jokeGeneratorButton.addEventListener('click',randomNumberGenerator);
