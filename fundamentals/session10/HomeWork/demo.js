const box = {
    left:0,
    top:0,
    speed:10, 
};
const moveTo = function(){
domObject('up').addEventListener('click',moveToUp);
domObject('down').addEventListener('click',moveToDown);
domObject('left').addEventListener('click',moveToLeft);
domObject('right').addEventListener('click',moveToRight);
}
const domObject = function (id){
    return document.getElementById(id);
}
const moveToUp = function(){
    box.top -= box.speed;
    domObject('box').style.top = `${box.top}px`;
}
const  moveToDown = function(){
    box.top += box.speed;
    domObject('box').style.top = `${box.top}px`;
}
const moveToLeft = function(){
    box.left -= box.speed;
    domObject('box').style.left = `${box.left}px`;
}
const moveToRight = function(){
    box.left += box.speed;
    domObject('box').style.left = `${box.left}px`;
}
moveTo();