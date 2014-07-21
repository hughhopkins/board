var misc = 657493;

var two = 2222222;

var friends = "Verity, Jono, Elise, Hugh, Ali";

var locations = ["london", "paris", "leeds"];

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];

document.getElementById("misc");

function hp() {
  for (var i = 1; i < agePlusOne; i ++) {
    console.log("happy " + i + "th birthday");
  };
};

var age = 24;

var agePlusOne = age + 1;

if (age > 24) {
  hp();
} else {
  console.log("not ya fucking birthday")
};

// first, lets get the data using jQuery
$.getJSON('https://api.gosquared.com/now/v3/overview?api_key=demo&site_token=GSN-106863-S&limit=10&callback=?', function(data) {
  var html = '';

  console.log("visitors = " + data.visitors);
  console.log("active = " + data.active);
  console.log("returning = " + data.returning);

  html += "Vistors online " + data.visitors + " Active vistors online " + data.active + " Returning visitors online " + data.returning;

  $('#misc-list').html(html);

});



/* - chopped for now

console.log(names + two);
console.log(locations[1]);

function hello() {
  console.log("basic hello and if anyone reads this on github they realise how long it takes me to learn");
};

hello();

for (var i = 1; i < 11; i++) {
  console.log(i);
};





//attempt to get into the html - doesn't work but doesn't break. doesn't add anything to the html.

var cities = ["Melbourne", "Amman", "Helsinki", "London"];
var target = document.getElementsByTagName("#misc-list")[0];
var i;

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
    var item = cities[i];
}

// another example - again this doesn't add anything to the html.

var names = ["here", "now", "there", "jono", "tom"];

for (var i = 0; i <names.length; i++) {
    console.log("I know someone called " + names[i]);
}

for (var i = 0; i <cities.length; i++) {
    console.log("I know someone called " + cities[i]);
}

end of chop */
