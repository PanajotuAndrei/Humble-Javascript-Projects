const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn = document.getElementById("btn");
color = document.querySelector(".color");

function getRandomNumber(){
    return Math.round(Math.random()*(hex.length-1))

}


btn.addEventListener("click", function(){

    let hexColor = '#'
    for (let i=1; i<=6; i++){
       hexColor = hexColor + hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

