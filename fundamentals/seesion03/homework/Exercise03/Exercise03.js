let array = prompt("Enter a list of number, separated by ' '");
array = array.split(' ');
let i;
let l = array.length;
let sum = 0;

for(i = 0; i < array.length; i++){
    sum += Number(array[i]);
}
console.log(sum);