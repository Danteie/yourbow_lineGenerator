var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');



function payday() {
    if (dd < 29) {
        var day = 29 - dd
        var payDayId = document.getElementById('payday');
        payDayId.innerHTML = 'DANI DO PLATE: ' + day
    }else if (dd = 29) {
        var payDayId = document.getElementById('payday');
        payDayId.innerHTML = '!!DANAS JE PLATA!!'
    }else if (dd > 29) {
        var day = (dd - 29) + 29
        var payDayId = document.getElementById('payday');
        payDayId.innerHTML = 'DANI DO PLATE: ' + day
    }
   
}

document.onload = payday();