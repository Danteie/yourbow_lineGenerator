
var outputLines = document.getElementById("output");
var orderLine = document.getElementById("order");
var hiden1 =  document.getElementById("hiden1");
var hiden2 =  document.getElementById("hiden2");
var positions = ["LB_01","LB_02","REC_01","REC_02","SR_01","SR_02","SKY_01","NTV_0"] 
var order = "";
var lines = ""
var line = "";

//Date

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


function generate(){
    var select = document.getElementById("select").value;
    var adv = document.getElementById("adv").value;
    var chm = document.getElementById("chm").value;
    var number = document.getElementById("num").value;
    order = select + "_" + adv + "_" + chm;
    
    lines= [];
    for (let index = 0; index < positions.length; index++) {
        if (positions[index] == 'NTV_0') {
            lines += select + "_" + adv + "_" + chm + "_" + "WBASE" + "_" + positions[index]+ number + "_"+ yyyy +"-" + mm + "-" + dd;
            
            return
        }
        lines += select + "_" + adv + "_" + chm + "_" + "WBASE" + "_" + positions[index] + "_" + yyyy +"-" + mm + "-" + dd + "<br/>"; 
    } 

}

function output(){
    generate()
    outputLines.innerHTML = lines;
    orderLine.innerHTML = order;
    hiden1.style.opacity = "1";
    hiden2.style.opacity = "1";
}