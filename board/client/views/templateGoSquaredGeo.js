// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/trends/v2/country?api_key=demo&site_token=GSN-106863-S&from=2014-01-01&to=2014-05-05&callback=?', function(data) {
  var html = '';

  // loop over the list and add each one to html
  for (var i = 0; i < data.list.length; i++) {
    var page = data.list[i];
    html += '<li><a href="' + page.id + '" vistitors="' + page.id + '">' + page.id + '</a></li>';
  }

  // select your list (ul) and insert the HTML into there
  $('#geo-content-list').html(html);
});
