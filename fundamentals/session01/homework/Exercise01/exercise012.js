//su  dung phuong phap de quy trong viec giai bai toan lap 
function monthInSeasson(){
    let month = prompt("Enter any month (1-12), eg:1");
    if(month<=0|| month >=13){
        monthInSeasson();
    }
    else{
        if(month==12 || (1<= month && month<=2)){ 
            console.log("This month's in Winter")}
        else if(3<= month && month <=5){ 
            console.log("This month's in Spring")}
        else if(6<= month && month <=8){
            console.log("This month's in Summer")}
        else{
            console.log("This month's in Fall")}
    }

}
monthInSeasson();