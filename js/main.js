$(function() {
  var count = 1;
  $('.whole-container').dblclick(function() {
  	$(this).addClass('move' + count);
    count++;
  });
});
