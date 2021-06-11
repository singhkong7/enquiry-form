let button=document.querySelector('button');
let input=document.querySelector('input');
let htag=document.querySelector('h1');
button.addEventListener('click',()=>{
    output.innerText=input.value;
});
input.addEventListener('keyup',()=>{
    if(input.value.length>2) button.disabled=false
    else button.disabled=true;
});
input.addEventListener('keyup',()=>{
    if(input.value.length>0) button.style.visibility='visible';
    else button.display=false;
});