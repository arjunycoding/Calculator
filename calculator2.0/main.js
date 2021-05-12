let dashboard = document.getElementById("dashboard");
let keyNames = {
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    88: "x",
    191: "/",
    187: "+",
    189: "-",
    13: "enter"

};
$("body").keydown(function (event) {
    if(keyNames[event.keyCode] == "1"){
        dashboard.innerHTML += "1"
    } else if(keyNames[event.keyCode] == "2"){
        dashboard.innerHTML += "2"
    } else if(keyNames[event.keyCode] == "3"){
        dashboard.innerHTML += "3"
    } else if(keyNames[event.keyCode] == "4"){
        dashboard.innerHTML += "4"
    } else if(keyNames[event.keyCode] == "5"){
        dashboard.innerHTML += "5"
    } else if(keyNames[event.keyCode] == "6"){
        dashboard.innerHTML += "6"
    } else if(keyNames[event.keyCode] == "7"){
        dashboard.innerHTML += "7"
    } else if(keyNames[event.keyCode] == "8"){
        dashboard.innerHTML += "8"
    } else if(keyNames[event.keyCode] == "9"){
        dashboard.innerHTML += "9"
    } else if(keyNames[event.keyCode] == "0"){
        dashboard.innerHTML += "0"
    } else if(keyNames[event.keyCode] == "x"){
        dashboard.innerHTML += " * "
    } else if(keyNames[event.keyCode] == "/"){
        dashboard.innerHTML += " / "
    } else if(keyNames[event.keyCode] == "-"){
        dashboard.innerHTML += " - "
    } else if(keyNames[event.keyCode] == "+"){
        dashboard.innerHTML += " + "
    } else if(keyNames[event.keyCode] == "enter"){
        let equation = eval(dashboard.innerHTML);
        dashboard.innerHTML += ` = ${equation}`;
    } else {
        console.log(event.keyCode)
    }
});