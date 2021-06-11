let counter = 2;
const slides = document.getElementsByClassName("slide");

document.getElementById(`radio1`).checked = true;

setInterval(() => {
    document.getElementById(`radio${counter}`).checked = true;
    counter++;
    if (counter > slides.length) {
        counter = 1;
    }
}, 3000);
