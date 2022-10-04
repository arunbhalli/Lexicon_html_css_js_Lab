$(document).ready(function () {
  $('#but1').click(function () {
    $(this).css('background-color', 'yellow');
    let data = $('#items').text() + ',';
    let result = $('#result').text(data);
    $('#result').text($('#items').text() + ',');
  });
});
