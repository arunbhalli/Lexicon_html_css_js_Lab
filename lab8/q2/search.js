$('#search-date1').keyup(function(){
  var value = this.value.toLowerCase();
  $('.modal_iterator_row').each(function(){
    var id = $(this).text().toLowerCase();
    $(this).toggle(id.indexOf(value) !== -1);
    console.log($(this).toggle(id.indexOf(value) !== -1))
  })

});