// Exercise11+Exercise12
let highScore = [45,67,56,78,67,90,100];
let k;
let i;
highScore.push(Number(prompt("Enter your new score")));
let l = highScore.length;
// xap xep mang tu cao toi thap
for(k = 0; k < l; k++){
for(i = 0; i < l; i++ ){
    if(highScore[k] > highScore[i]){
        let temp = highScore[k];
        highScore[k] = highScore[i];
        highScore[i] = temp;
    }
}
}
console.log(highScore);
// xuat ra 5 diem so cao nhat
for(i=0; i<5;i++){
    console.log(highScore[i]);
}

