
window.onload=function(){
    var score = JSON.parse(localStorage.getItem("score"));
    var good = score["good"];
    var bad = score['bad'];
    localStorage.removeItem('score'); 
    console.log(bad);
}
