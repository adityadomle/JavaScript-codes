var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("mouseover", function () {
p.textContent = "i am a web developer based in nagpur area"
p.style.backgroundColor = "lightgreen"
});
btn.addEventListener("mouseleave", function () {
p.textContent = "i am a web developer based in pune area"
p.style.backgroundColor = "green"
});