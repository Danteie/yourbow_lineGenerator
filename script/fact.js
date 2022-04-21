var limit = 1;
var fact = document.getElementById('fact')

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: { 'X-Api-Key': 'Mmt4TTxeUpX7ZL5UGJ5XHQ==bH9tWqtPIhiHEUQx'},
    contentType: 'application/json',
    success: function(result) {
            fact.innerHTML = result[0].fact
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});



