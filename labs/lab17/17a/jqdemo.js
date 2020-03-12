$(document).ready(function () {
    // add a 5px red dashed boarder around the panel div
    // provide a 10 pixel padding around all of the divs
    $('.card').css('border', '5px dashed red');
    $('.card').css('padding', '10px');

    // set all div's padding to 3px
    $('div').css('padding', '3px');
    // set all divs in the card-body to background gray
    $('div.card-body').css('background', 'gray');
    // set all divs of class cat to green
    $('div.cat').css('background-color', 'green');

    // set all divs of class dog to red
    $('div.dog').css('color', 'red');
    // set the id of lab to a 1px solid yellow border
    $('#lab').css('border', '1px solid yellow');
    // set the last div with class dog to background yellow
    $('div.dog').css('background', 'yellow');
    // set the calico cat's width to 50%, 
    $('#calico').css('width','50%');
    // background to green and color to white 
    $('body').css('background', 'green');
    $('body').css('color', 'white');
});