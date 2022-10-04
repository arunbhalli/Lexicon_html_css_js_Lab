$(document).ready(function () {
  $('#but1').click(function () {
    $(this).css('background-color', 'yellow');
    let result = [];
    $('#items li')
      .toArray()
      .map((e) => result.push(e.textContent));
    $('#result').text(result.join(', '));
  });
});
