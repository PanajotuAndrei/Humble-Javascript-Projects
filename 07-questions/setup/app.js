//using selectors inside the element
// traversing the dom
const plusbtn = document.querySelectorAll('question-btn');

console.log(plusbtn)
plusbtn.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        console.log('aa');
    })
});
