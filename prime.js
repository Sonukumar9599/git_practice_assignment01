function prime(n){
    let fact=0;
    for(let i=1;i<=n;i++){
        if(n % i==0){
           fact++;
           }
        }
    if(fact==2){
        return true;
}
        return false;
}
let x=prime(15);
if(x==true){
    console.log("Prime");
} else {
    console.log("Not Prime");
}

