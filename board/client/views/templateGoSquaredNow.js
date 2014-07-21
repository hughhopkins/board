// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/now/v3/overview?api_key=demo&site_token=GSN-106863-S&limit=10&callback=?', function(data) {
  var html = '';

  console.log("visitors = " + data.visitors);
  console.log("active = " + data.active);
  console.log("returning = " + data.returning);

  html += "Vistors online " + data.visitors + " Active vistors online " + data.active + " Returning visitors online " + data.returning;

  var dataTest = data.visitors;

  $('#now-content-list').html(html);
});

console.log(dataTest + "fuk yeh")
