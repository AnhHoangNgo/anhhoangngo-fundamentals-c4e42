//su dung phuong phap de quy trong giai quyet bai toan lap
count=0;
function demSoChuCai(n){
if(n===0){
     if(count===0){
         console.log("Number has "+ 1 +" digits")
    }
    else{console.log("Number has " + count +" digits")}
    }
else{
        n= Math.floor(n/10);
        count++;
        demSoChuCai(n);
    }
}
let y= parseInt(prompt("Enter any number"));
demSoChuCai(y);