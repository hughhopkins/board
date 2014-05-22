// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/now/v3/pages?api_key=demo&site_token=GSN-106863-S&limit=20&callback=?', function(data) {
  var html = '';

  // loop over the list and add each one to html
  for (var i = 0; i < data.list.length; i++) {
    var page = data.list[i];
    html += '<li><a href="' + page.href + '" vistitors="' + page.title + '">' + page.title + '</a></li>';
  }

  // select your list (ul) and insert the HTML into there
  $('#test-content-list').html(html);
});
