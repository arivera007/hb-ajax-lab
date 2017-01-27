"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {

    // TODO: get the fortune and show it in the #fortune-text div
    $('#fortune-text').html(results);
}

function getFortune() {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, onWeatherResponse);

}


function onWeatherResponse(result) {

    $('#weather-info').html(result.forecast);

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    var formValues = $('#order-form').serialize();

    $.post("/order-melons.json", formValues, displayMessage);

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

function displayMessage(results) {
    $('#order-status').html(results.msg);
    $('#order-status').removeClass('order-error');

    if (results.code === 'ERROR') {
        $('#order-status').addClass('order-error');
    }
}

$("#order-form").on('submit', orderMelons);


