var form = document.querySelector("form");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var h4 = document.querySelector("h4");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    if (inp1.value === '' || inp2.value === '') {
        console.log("Blank");
        h4.textContent = "Error, some fields are blank";
        h4.style.color = "red";
    } else {
        h4.textContent = "Form submitted successfully!";
        h4.style.color = "green";
    }
});
