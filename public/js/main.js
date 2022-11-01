const flipButton = document.querySelector("#flip-button");
const imgElement = document.querySelector("#coin-img");
const winner = document.querySelector("#flip-result");

const  generateFlip = () => {
    let flip = Math.ceil(Math.random()*2); // Chooses 1 or 2 randomly
    winner.innerHTML="The flip is up...!"
    setTimeout(() => {if(flip == 1){
        imgElement.src="/imgs/heads.jpg";
        winner.innerHTML="It's heads!"
    } else {
        imgElement.src="/imgs/tails.jpg";
        winner.innerHTML="It's tails!"
    }}, 3000)
    imgElement.src="#"
}

flipButton.addEventListener('click', generateFlip);