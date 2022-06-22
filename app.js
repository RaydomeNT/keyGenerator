const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const keyCodeDiv = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");
const displayWhichCode = document.querySelector(".whichCode h2");

window.addEventListener("keydown", e => {
    overlay.style.display = "none";
    displayKey.innerText = e.key;
    displayWhichCode.innerText = e.which;
    displayKeyCode.innerText = e.key;
    if(e.keyCode === 32){
        displayKey.innerText = `space`;
    }
})