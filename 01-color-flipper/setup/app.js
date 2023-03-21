// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById('btn');
// const color = document.querySelector(".color");

// btn.addEventListener('click', function(){
//     //random number izmedju 0 i 3
//     const randomNumber = Math.round(Math.random()*3);
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];


// })

const Coolors = ["Green", "Blue", "Turquoise"];
const button = document.getElementById('btn');
const color = document.querySelector(".color")

button.addEventListener("click", function(){
    const random = getRandomNumber();
    document.body.style.backgroundColor = Coolors[random];
    color.textContent = random

});

function getRandomNumber(){
    return Math.round((Coolors.length-1)*Math.random());
};
