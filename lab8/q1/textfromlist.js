$(document).ready(function () {
  $('#but1').click(function () {
    $(this).css('background-color', 'yellow');
    let data = $('#items').text() + ',';
    let result = $('#result').text(data);
    console.log(result);
    // console.log($('#result').text($('#items').text() + ','));
    return;
  });
});
