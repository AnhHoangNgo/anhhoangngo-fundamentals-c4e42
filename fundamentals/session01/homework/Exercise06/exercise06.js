let a=Number(prompt("Enter a")), b=Number(prompt("Enter b")), c=Number(prompt("Enter c"));
if(a===0){
    if(b===0 && c===0){
        console.log("The equation's alway true ");}
        else if(b===0 && c!=0){ 
            console.log("The equation hasn't root");}
    else {
        console.log("The equation has a root");
        console.log( "r ="+c/b)}}
else{
    let delta = b*b-4*a*c;
    if(denta > 0){
        console.log("The equation has two roots");
        console.log("r1 = "+ (-b +Math.sqrt(delta))/(2*a));
        console.log("r2 = "+(-b -Math.sqrt(delta))/(2*a));
    }else if( delta===0){
        console.log("The equation has a root")
        console.log("r= "+-b/(2*a))}
    else {
        console.log("The equation hasn't root")}}