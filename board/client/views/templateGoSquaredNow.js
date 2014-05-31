// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/now/v3/overview?api_key=demo&site_token=GSN-106863-S&limit=10&callback=?', function(data) {
  var html = '';

  console.log(data.visitors);
  console.log(data.active);
});

console.log("done");
