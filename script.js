"use strict";

function load() {
checkJavaScript();
setColors();
console.log("checkJavaScript, setColors");
system();
console.log("system");
}
window.onload = load

function checkJavaScript() {
document.getElementById("checkJavaScript").innerHTML = `<p></p>`;
}

function fontSelection() {
globalThis.fontType = document.getElementById("fontType").value;
if (fontType == "serif") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Times New Roman">Times New Roman</option><option value="Georgia">Georgia</option><option value="Garamond">Garamond</option>`;
} else if (fontType == "sans") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Arial">Arial</option><option value="Verdana">Verdana</option><option value="Helvetica">Helvetica</option>`;
} else if (fontType == "monospace") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Courier New">Courier</option>`;
} else if (fontType == "decorative") {
document.getElementById("fontName").innerHTML = `<option value="" disabled selected hidden>select font</option><option value="Comic Sans MS">Comic Sans</option><option value="Brush Script MT">Brush Script MT</option><option value="Lucida Handwriting">Lucida Handwriting</option><option value="Papyrus">Papyrus</option>`;
} fontPreview(); }

function fontSystemPreview() {
if (fontType == "serif") {
document.getElementById("fontSystemPreview").innerHTML = `<p class="input"><span style="font-family: Times New Roman;">Times New Roman </span><span style="font-family: Georgia;">Georgia </span><span style="font-family: Garamond;">Garamond</span></p>`;
} else if (fontType == "sans") {
document.getElementById("fontSystemPreview").innerHTML = `<p class="input"><span style="font-family: Arial;">Arial </span><span style="font-family: Verdana;">Verdana </span><span style="font-family: Helvetica;">Helvetica</span></p>`;
} else if (fontType == "monospace") {
document.getElementById("fontSystemPreview").innerHTML = `<p class="input"><span style="font-family: Courier New;">this is Courier</span></p>`;
} else if (fontType == "decorative") {
document.getElementById("fontSystemPreview").innerHTML = `<p class="input><span style="font-family: Comic Sans;">Comic Sans </span><span style="font-family: Brush Script MT;">Brush Script MT </span><span style="font-family: Lucida Handwriting;">Lucida Handwriting </span><span style="font-family: Papyrus;">Papyrus</span></p>`;
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
