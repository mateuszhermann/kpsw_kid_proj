
window.onload=function(){
    var score = localStorage.getItem("score");
    var good = score["good"];
    console.log(score.valueOf(good));
}