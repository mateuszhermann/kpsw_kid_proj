
window.onload=function(){
    var score = JSON.parse(localStorage.getItem("score"));
    var good = score["good"];
    var bad = score['bad'];

    console.log(good+bad);
    for (var i = 1; i <=5; i++) {
        if (good>=i) {
            document.getElementById("gs"+i).style.color="pink";
            console.log("gs"+i);
        }
        if (bad>=i) {
            document.getElementById("bs"+i).style.color="pink";
            console.log("bs"+i);
        }
    }
    localStorage.removeItem('score'); 
}

document.querySelector("#menu").addEventListener("click", ()=>{
    window.location.replace('./index.html')
})
