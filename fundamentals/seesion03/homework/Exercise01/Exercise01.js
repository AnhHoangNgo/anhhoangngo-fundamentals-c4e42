let array =[1,3,5,8,7];
let number = Number(prompt("Enter any number"));
let indexOfNumber = array.indexOf(number);

    if(indexOfNumber === -1){
        console.log("Not found in our list");
    }else{
        console.log("Found, position "+ indexOfNumber);
    
    }