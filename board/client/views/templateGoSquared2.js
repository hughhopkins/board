// first, lets get the data using jQuery
$.getJSON('some sort of url', function(data) {
  var html = '';

  // loop over the list and add each one to html
  for (var i = 0; i < data.list.length; i++) {
    var page = data.list[i];
    html += '<li><a href="' + page.href + '" title="' + page.title + '">' + page.title + '</a></li>';
  }

  // select your list (ul) and insert the HTML into there
  $('#top-content-list').html(html);
});
