const decBtn=document.getElementById("decre");
const resBtn=document.getElementById("reset");
const incBtn=document.getElementById("incre");
const display=document.getElementById("display");
let c=0;
 decBtn.onclick=function(){
    c--;
    display.textContent=c;
 }

 resBtn.onclick=function(){
    c=0;
    display.textContent=c;
 }

 incBtn.onclick=function(){
    c++;
    display.textContent=c;
 }

 let ra=Math.random();
 console.log(Math.trunc(ra*9)+1);

