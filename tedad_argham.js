let a=prompt("enter your number?");
//let a=7462;
let counter=0
while(a>0){
    ++counter;
    a=a/10;
    a=parseInt(a);
};
console.log(counter);