let dp = document.querySelector('.circle')

dp.addEventListener('click',(e)=>{
let box = e.target.parentElement
box.style.position = 'fixed'
box.style.height = '100vh'
box.style.top = '0'
box.innerHTML += ``
})