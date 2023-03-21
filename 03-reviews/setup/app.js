// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Pana',
    job: 'Dipl. Oec',
    img: 'http://aurora.ekof.bg.ac.rs/~s200555/CV.jpg',
    text: "Mlad i neiskusan, entuzijastican i spreman za rad na karburatorima, mekdnoaldsu ili u Nargila Baru!",
  },
  {
    id: 2,
    name: 'Vuk Krstic',
    job: 'Dipl. Oec.',
    img: 'http://aurora.ekof.bg.ac.rs/~s201105/1647734313806.jpg',
    text: 'Freestyle wrestler and former folkstyle wrestler who currently competes at 79 kilograms, and previously competed at 74 kilos',
  },
  {
    id: 3,
    name: 'Aljosa Tasic',
    job: 'Dipl. Oec.',
    img: 'http://aurora.ekof.bg.ac.rs/~s200543/images/IMG_9630.PNG',
    text: "ALJOSA. ALJOSA KATAN. ALJOSA TASTATURA. ALJOSA GMAIL. ALJOSA CASOVI" ,
  },
  {
    id: 4,
    name: 'COBELJA',
    job: 'the boss',
    img: 'http://aurora.ekof.bg.ac.rs/~s150521/17577798_10206642521421494_21313345_n.jpg',
    text: 'COBELJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA VEJPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP ',
  },
];

const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
const random = document.querySelector(".random-btn");
let currentItem = 0;

const author = document.getElementById("author");
const img = document.getElementById("person-img");
const job = document.getElementById("job");
const info = document.getElementById("info");

window.addEventListener("DOMContentLoaded", function(){

showPerson(currentItem)

})
function showPerson(person){
  const item = reviews[person];
  console.log(item.name)
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


next.addEventListener("click", function(){
  currentItem ++;
  if(currentItem > reviews.length - 1){
    currentItem = 0
  }
  console.log('aa')
  showPerson(currentItem)
  console.log(currentItem)
})
prev.addEventListener("click", function(){
  currentItem --;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
    
  }
  else if (currentItem<0){
    currentItem = reviews.length - 1
    console.log(currentItem)
  }
  console.log('aa')
  showPerson(currentItem)
})
random.addEventListener("click", function(){
  currentItem = Math.floor(Math.random() * reviews.length);

  console.log(currentItem)
  showPerson(currentItem);
})





