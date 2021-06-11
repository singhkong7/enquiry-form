let button=document.querySelector('button');
let textarea=document.querySelector('textarea');
button.addEventListener('click',()=>{
    output.innerText=input.value;
});
textarea.addEventListener('keyup',()=>{
    if(textarea.value.length>0) button.disabled=false;
    else button.disabled=true;
});
textarea.addEventListener('keyup',()=>{
    if(textarea.value.length>0) button.style.visibility='visible';
    else button.style.visibility='hidden';
});