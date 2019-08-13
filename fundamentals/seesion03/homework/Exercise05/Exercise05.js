let array = prompt("Enter a list of number, separated by ','");
array = array.split(",");
let l = array.length;

for(i = 0; i < l; i++){
    if(Number(array[i]) % 2 === 0){
        console.log(Number(array[i]));
    }
}