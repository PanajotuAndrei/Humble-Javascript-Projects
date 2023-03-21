const btn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const close = document.getElementById('close')
 

btn.addEventListener('click', function(){
    console.log(sidebar.classList)
    sidebar.classList.toggle('show-sidebar')
})
close.addEventListener('click', function(){
sidebar.classList.remove('show-sidebar');
})