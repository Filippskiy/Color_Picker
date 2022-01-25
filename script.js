let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let box = document.querySelector('div.square_color');

let r = 0, g = 0, b = 0;
function submit_color(){
    r = red.value;
    g = green.value;
    b = blue.value;
    if (!r)
		r = 0;
    if (!g)
		g = 0;
    if (!b)
		b = 0;
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function reset(){
    red.value="";
    green.value="";
    blue.value="";
    box.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
function copyColor(){
    r = Number(red.value);
    g = Number(green.value);
    b = Number(blue.value);
    var color = rgbToHex(r,g,b);
    alert("Your color in Hex: "+color);
}
const btn = document.querySelector(".btn");
const content = document.querySelector(".inpt");

btn.addEventListener("click", btnClick);

function btnClick() {

    if (content.classList.contains("hidden")) {
        btn.textContent = "Скрыть панель";
    } else {
        btn.textContent = "Показать панель";
    }

    content.classList.toggle("hidden");
}