var secondHand =document.querySelector('.second-hand');
var hourHand =document.querySelector('.hour-hand');
var minuteHand =document.querySelector('.min-hand');
function setDate(){
    // console.log(1);
    var now = new Date();
    // 读秒
    var second =now.getSeconds();
    var secondsDeg = ((second/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    // 读时
    
    var hour =now.getHours();
    var hoursDeg = ((hour%24)*15)+90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    var min =now.getMinutes();
    var minsDeg =(min/60)*360+90;
    minuteHand.style.transform = `rotate(${minsDeg}deg)`;
}
setDate();
var t1 = setInterval(setDate,1000);
// console.log(hour);