// let count = 0;
// const btns = document.querySelectorAll('.btn');
// const value = document.querySelector('#value');

// btns.forEach(function(dugme) {
//     dugme.addEventListener('click', function(e){
//         const styles = e.currentTarget.classList;
//         if(styles.contains ("increase")){
//             count = count + 1;
//         }
//         else if(styles.contains ("decrease")){
//             count--;
//         }
//         else if (styles.contains ("reset")){
//             count = 0;
//         }
//         if (count > 0){
//             value.style.color = "green";
//         }
//         if (count < 0){
//             value.style.color = "red";
//         }
//         if (count == 0){
//             value.style.color = "black"
//         }
//         value.textContent = count;
//     })
    
// });


let broj = 0
const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

// btn.forEach(function(dugmici){
//     dugmici.addEventListener("click", function(klik){
//         const tip = klik.currentTarget.classList;

//     })

//     console.log(dugmici.currentTarget.classList);

// })

btn.forEach(function(dugmici){
    dugmici.addEventListener("click", function(KliknutoDugme){
        const tip = KliknutoDugme.currentTarget.classList;
        if (tip.contains("increase")){
            broj++;
        }
        else if (tip.contains("decrease")){
            broj--;
        }
        else if(tip.contains("reset")){
            broj = 0;
        }
        if(broj>0){
            document.body.style.backgroundColor = "green";
            value.style.color= "white";
        }
        else if(broj==0){
            document.body.style.backgroundColor = "white";
            value.style.color = "black";
        }
        if(broj<0){
            document.body.style.backgroundColor = "red";
            value.style.color = "white";
        }
        value.textContent = broj;
    })
})