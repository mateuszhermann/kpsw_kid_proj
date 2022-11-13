export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function randomize(){
    var x;
    do{
        x=getRandomInt(9);
    }while(x==0);
    return x;
}

export function sum(a,b){
    return a+b;
}

function chck(eq,input){
    if(eq==input){
        return true
    } else{
        return false
    }
}

