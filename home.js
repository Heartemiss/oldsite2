var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-1000px";
  }
  prevScrollpos = currentScrollPos;
} 