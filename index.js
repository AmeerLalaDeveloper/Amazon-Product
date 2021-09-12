const btn=document.querySelector('.yell-btn');
const amount=document.querySelector('.amount');
let count=0;
btn.addEventListener('click',()=>{
    count++;
    amount.innerHTML=count
})