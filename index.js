let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);
let title = document.getElementById("title");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let button = document.getElementById("refresh")

if(randomNumber1 > randomNumber2){
    title.innerHTML ="player 1 wins";
} else if(randomNumber2>randomNumber1){
    title.innerHTML = "player 2 wins";
} else{
    title.innerHTML = "draw";
}
img1.src=`images/dice${randomNumber1}.png`;
img2.src=`images/dice${randomNumber2}.png`;

function refreshSite(event){
    window.location.reload();
}
button.addEventListener("click", refreshSite)