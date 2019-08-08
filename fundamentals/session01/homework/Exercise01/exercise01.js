let x =true;
for( ; x ; ){
let month= parseInt(prompt("Enter any month (1-12) eg : 1 , thanks!"));
if(month<=0 || month>=13){
    console.log("error, enter again! ")}
else{
    x=false;
    if(month==12 || (1<= month && month<=2)){ 
        console.log("This month's in Winter")}
    else if(3<= month && month <=5){ 
        console.log("This month's in Spring")}
    else if(6<= month && month <=8){
        console.log("This month's in Summer")}
    else if(8<=month && month <=11){
        console.log("This month's in Fall")}}}