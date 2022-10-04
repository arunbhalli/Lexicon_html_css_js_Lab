$(document).ready(function () {
  $('.check1 ').click(function () {
    $('.check1').addClass('selected');
    // $('.button').css('background-color', 'blue')
  });
  $('.check2 ').click(function () {
    $('.check2').addClass('selected');
    // $('.button').css('background-color', 'blue')
  });
  $('.check3 ').click(function () {
    $('.check3').addClass('selected');

    // $('.button').css('background-color', 'blue')
  });
  $('.check3 ').click(function () {
    $('.check3').addClass('selected');
    $('.selectedTowns').text($('li:first').text() + ',');
    // $('.button').css('background-color', 'blue')
  });
  $('.check4 ').click(function () {
    $('.check4').addClass('selected');
    // $('.button').css('background-color', 'blue')
  });
  $('.check5 ').click(function () {
    $('.check5').addClass('selected');
    // $('.button').css('background-color', 'blue')
  });
  $('#but1').click(function () {
    $('#selectedTowns').text('Selected Towns:' + $('li').text());
  });
});
