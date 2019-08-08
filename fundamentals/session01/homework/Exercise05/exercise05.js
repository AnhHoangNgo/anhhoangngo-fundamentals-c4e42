let x= true
let count;
let n=parseInt(prompt("Enter number"))
for(count =0; x ;count++){
    n = Math.floor(n/10);
    if(n===0){
        x=false;}}
console.log("The number you entered has "+count+" digits");