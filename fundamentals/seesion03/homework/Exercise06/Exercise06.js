// Exercise06

let district = ["ST", "BD", "BTL","CG", "DD", "HBT"];
let People = [150.300, 247.100, 333.300, 266.800, 420.900, 318.000];

//Exercise07 + Exercise08
// Xac dinh chi so index cua quan co dan so lon nhat va nho nhat roi xuat ra ten quan tuong ung 
let Max = People[1];
let Min = People[1];
let indexMax = 0;
let indexMin = 0;
let l = People.length;
let i;

for(i = 0; i < l; i++){
    if(Max < People[i]){
        Max = People[i];
        indexMax = i;
    }
    if(Min > People[i]){
        Min = People[i];
        indexMin = i;
    }
}
console.log("index of max element is "+ indexMax +", "+ "The most populated areas: " + district[indexMax]);
console.log("index of min element is " + indexMin + ", "+ "The least populated areas: " + district[indexMin]);

//Exercise09
// Xac dinh mat do dan cu cua tung quan
let km = [173.43, 9.224, 42.35, 12.04, 9.96, 10.09];
let matDo = [];
let k = km.length;

for(i = 0; i< k; i++){
    matDo.push(People[i] / km[i]);
}
console.log("average number of people per area: "+ matDo);

// Exercise10
// Xac dinh mat do dan cu trung binh
let sum=0;
let h = matDo.length

for(i=0; i < h; i++){
   sum += matDo[i];
}
console.log("average number of people: " , sum / h);