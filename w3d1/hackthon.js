var count = 1;

var reloadCSS = function() {
  $('#css').replaceWith('<link id="css" rel="stylesheet" href="hackathon.css">');
};

var reloadJavascript = function() {
  $('#javascript').replaceWith('src="hackthon.js"');
};

$("#getMeBuddy").click(function(){
  window.open('hackthon.html');
});

$("#hang").click(function(){
  window.open('hang.html');
});

$("#pass").click(function(){
	document.getElementById("dog").src = "https://barkpost.com/wp-content/uploads/2014/07/Emotion-motion-by-Jelly-Dude-via-Flickr.jpg";
  	reloadCSS;
});