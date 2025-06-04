var btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
    btn.textContent = "Download Starting..."
    btn.style.backgroundColor = "green"
});

btn.addEventListener("mouseleave", function () {
    btn.textContent = "Download done..."
    btn.style.backgroundColor = "red"
});