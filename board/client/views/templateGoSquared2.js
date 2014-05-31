// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/trends/v2/page?api_key=demo&site_token=GSN-106863-S&callback=?', function(data) {
  var html = '';

  // loop over the list and add each one to html
  for (var i = 0; i < data.list.length; i++) {
    var page = data.list[i];
    html += '<li><a href="' + page.href + '" vistitors="' + page.title + '">' + page.host + '</a></li>';
  }

  // select your list (ul) and insert the HTML into there
  $('#overview-content-list').html(html);
});
