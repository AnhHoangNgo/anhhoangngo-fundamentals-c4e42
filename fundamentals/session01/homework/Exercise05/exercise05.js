let x= true
let count;
let n=prompt("Enter number")
for(count =1; x ;count++){
    n = Math.floor(n/10);
    if(n==1){
        x=false;}}
console.log("The number you entered has "+count+" digits");