"use strict";

function load() {
checkJavaScript();
setColors();
}
window.onload = load

function checkJavaScript() {
document.getElementById("checkJavaScript").innerHTML = `<p></p>`;
}

function fontSelection() {
var fontType = document.getElementById("fontType").value;
if (fontType == "serif") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Times New Roman">Times New Roman</option><option value="Georgia">Georgia</option><option value="Garamond">Garamond</option>`;
} else if (fontType == "sans") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Arial">Arial</option><option value="Verdana">Verdana</option><option value="Helvetica">Helvetica</option>`;
} else if (fontType == "monospace") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Courier, Courier New">Courier</option>`;
} else if (fontType == "decorative") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Comic Sans MS">Comic Sans</option><option value="Brush Script MT">Brush Script MT</option><option value="Lucida Handwriting">Lucida Handwriting</option><option value="Papyrus">Papyrus</option>`;
}}

function setFonts() {
const root = document.documentElement;
var fontName = document.getElementById("fontName").value;
root.style.setProperty("--font", fontName);
}

function setColors() {
const root = document.documentElement;
var background = document.getElementById("background").value;
var foreground = document.getElementById("foreground").value;
root.style.setProperty("--background", background);
root.style.setProperty("--foreground", foreground);
}

function buttonOne() {
document.getElementById("buttonOne").textContent = `selected!`;
document.getElementById("buttonTwo").textContent = `press to select`;
}

function buttonTwo() {
document.getElementById("buttonOne").textContent = `press to select`;
document.getElementById("buttonTwo").textContent = `selected!`;
}