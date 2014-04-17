// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/now/v3/concurrents?api_key=foo&site_token=bar', function(data) {
  var html = '';

  // loop over the list and add each one to html
  for (var i = 0; i < data.list.length; i++) {
    var page = data.list[i];
    html += '<li><a href="' + page.href + '" title="' + page.title + '">' + page.title + '</a></li>';
  }

  // select your list (ul) and insert the HTML into there
  $('#top-content-list').html(html);
});
