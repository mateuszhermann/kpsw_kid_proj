import {randomize} from "./functions.js";
import {close} from "./controls.js"
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
    eql=a+b;
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
    if(number<=5){
        set();
    }else{
        var score={'good':good, 'bad':bad};
        localStorage.setItem('score',JSON.stringify(score));
        window.location.replace('./koniecGry.html');
    }
}


document.querySelector("#nextButton").addEventListener("click", ()=>{
    next();
})

document.querySelector("#close").addEventListener("click", ()=>{
    if (process.platform == 'darwin'){
        window.close()
    }else{
        close();
    }
})
document.querySelector("#menu").addEventListener("click", ()=>{
    window.location.replace('./index.html')
})

window.onload = function() {
    set()
}