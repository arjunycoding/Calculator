let num1= document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");
let opAdd = document.getElementById("num+");
let opSub = document.getElementById("num-");
let opMul = document.getElementById("num*");
let dec = document.getElementById("numDec");
let opDiv = document.getElementById("numDiv");
let modulus = document.getElementById("modulus");
let openBracets = document.getElementById("openBracets");
let closeBracets = document.getElementById("closeBracets");
let calculate = document.getElementById("calculate");
let dashboard = document.getElementById("dashboard");
let clear = document.getElementById("clear");
function add1(){
    dashboard.innerHTML += "1";
}
function add2(){
    dashboard.innerHTML += "2";
}
function add3(){
    dashboard.innerHTML += "3";
}
function add4(){
    dashboard.innerHTML += "4";
}
function add5(){
    dashboard.innerHTML += "5";
}
function add6(){
    dashboard.innerHTML += "6";
}
function add7(){
    dashboard.innerHTML += "7";
}
function add8(){
    dashboard.innerHTML += "8";
}
function add9(){
    dashboard.innerHTML += "9";
}
function add0(){
    dashboard.innerHTML += "0";
}
function add(){
    dashboard.innerHTML += " + ";
}
function sub(){
    dashboard.innerHTML += " - ";
}
function mul(){
    dashboard.innerHTML += " * ";
}
function div(){
    dashboard.innerHTML += " / ";
}
function calculateAnswer(){
    if(dashboard.innerHTML == ""){
        console.log("Invalid equation");
    } else {
        let equation = eval(dashboard.innerHTML);
        dashboard.innerHTML += ` = ${equation}`;
    }
}
function addDec(){
    dashboard.innerHTML += `.`;
}
function clearDashboard(){
    dashboard.innerHTML =  ``;
}
function addOpenBaces(){
    dashboard.innerHTML += `(`;
}
function addClosingBaces(){
    dashboard.innerHTML += `)`;
}
function addModulus(){
    dashboard.innerHTML += ` % `;
}
num0.addEventListener("click", add0);
num1.addEventListener("click", add1);
num2.addEventListener("click", add2);
num3.addEventListener("click", add3);
num4.addEventListener("click", add4);
num5.addEventListener("click", add5);
num6.addEventListener("click", add6);
num7.addEventListener("click", add7);
num8.addEventListener("click", add8);
num9.addEventListener("click", add9);
opAdd.addEventListener("click", add);
opSub.addEventListener("click", sub);
opMul.addEventListener("click", mul);
opDiv.addEventListener("click", div);
modulus.addEventListener("click", addModulus);
dec.addEventListener("click", addDec);
openBracets.addEventListener("click", addOpenBaces);
closeBracets.addEventListener("click", addClosingBaces);
clear.addEventListener("click", clearDashboard);
calculate.addEventListener("click", calculateAnswer);
