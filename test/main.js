
function rand(min,max){
let u = Math.trunc(0 + Math.random() * (100 + 1 - 0));
document.querySelector('.text').textContent = u 
console.log(u)
}

document.querySelector('.but').addEventListener('click',rand)





