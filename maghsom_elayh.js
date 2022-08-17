//let a=prompt("enter your first number:");
//let b=prompt("enter your second number:");
let a=12;
let b=44;
max=Math.max(a,b);
for(let i=1; i<=max/2 ; i++){
    if(a%i==0 && b%i==0){
        console.log(i);
    };

};

