function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randoize(){
    var x;
    do{
        x=getRandomInt(9);
    }while(x==0);
    return x;
}

function sum(a,b){
    return a+b;
}

function chck(eq,input){
    if(eq==input){
        return true
    } else{
        return false
    }
}

