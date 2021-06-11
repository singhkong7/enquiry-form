let button=document.querySelector('button');
let input=document.querySelector('input');
button.addEventListener('click',()=>{
    output.innerText=input.value;
});
input.addEventListener('keyup',()=>{
    if(input.value.length>=10) button.disabled=false
    else button.disabled=true;
});
input.addEventListener('keyup',()=>{
    if(input.value.length>=10) button.style.visibility='visible';
    else button.style.visibility='hidden';
});