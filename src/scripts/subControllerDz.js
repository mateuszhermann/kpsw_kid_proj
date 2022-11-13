import {randomize} from "./functions.js";
var number=1;
var a=0;
var b=0;
var eql;
var good=0;
var bad=0;
var awnser=0;
function set(){
    
    document.getElementById('number').innerHTML=number;
    a=randomize();
    document.getElementById('a').innerHTML=a;
    b=randomize();
    while(a<b){
        b=randomize();
    }
    document.getElementById('b').innerHTML=b;
    eql=a/b;
}

function next(){
    awnser=document.getElementById("awnser").value;
    if(eql==awnser){
        good++
    } else{
        bad++
    }
    console.log("good"+good+"bad"+bad);
    number++
    set()
}


document.querySelector("#nextButton").addEventListener("click", ()=>{
    next();
})
window.onload = function() {
    set()
}