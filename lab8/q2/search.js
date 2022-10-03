$(document).ready(function () {
  $('#searchText').keyup(function () {
    var filter = $(this).val(),
      count = 0;
    $('#town li').filter(function () {
      if ($(this).text().toLowerCase().search(new RegExp(filter, 'i'))) {
      } else {
        $(this).show();
        $(this).css('font-weight', 'bold');
        count++;
      }
    });
    var numberItems = count;
    $('#result-count').text('Number of Results = ' + count);
  });
});
