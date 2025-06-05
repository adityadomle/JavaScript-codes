window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  var docHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("progressBar").style.width = scrollPercent + "%";
});
