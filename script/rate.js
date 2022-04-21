var rate = document.getElementById('rate');

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR',
    headers: { 'X-Api-Key': 'Mmt4TTxeUpX7ZL5UGJ5XHQ==bH9tWqtPIhiHEUQx'},
    contentType: 'application/json',
    success: function(result) {
        rate.innerHTML = "USD TO EURO: " + result.exchange_rate
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});