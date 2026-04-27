"use strict";

function createHTML() {

globalThis.cssOne = ":root{--background:"+background+";--foreground:"+foreground+";--font:\""+fontName+"\";}";
console.log(cssOne);
globalThis.cssTwo = 'body{background-color:var(--background);color:var(--foreground);width:700px;margin:0 auto;a:link,a:visited{color:var(--foreground);text-decoration:none;font-weight:700}a:hover{color:var(--foreground);text-decoration:none;font-weight:700;cursor:pointer}font-family:var(--font);font-weight:400;font-style:normal;font-size:13pt;text-align:justify}.main-buttonOne{font-family:var(--font);font-weight:500;font-style:normal;background-color:var(--foreground);color:var(--background);width:314px;display:block;margin:0 auto;border-radius:13px;text-align:center;font-size:25pt;border-style:solid;border-width:5px;border-color:var(--foreground)}.main-buttonOne:hover{cursor:pointer;border-color:var(--foreground);border-style:solid;border-width:5px;color:var(--foreground);background-color:var(--background)}.main-buttonTwo{font-family:var(--font);font-weight:500;font-style:normal;background-color:var(--background);color:var(--foreground);width:314px;display:block;margin:0 auto;border-radius:13px;text-align:center;font-size:25pt;border-style:solid;border-width:5px;border-color:var(--foreground)}.main-buttonTwo:hover{cursor:pointer;border-color:var(--background);border-style:solid;border-width:5px;color:var(--background);background-color:var(--foreground)}.main-footer{position:fixed;bottom:0;font-size:13pt}.main-picture{width:700px;height:395px;overflow:hidden;position:relative;border-radius:13px}.main-picture iframe{position:absolute;top:-50px;left:-2px;width:704px;height:395px;pointer-events:none;border-radius:13px}';
globalThis.cssThree = cssOne+cssTwo;
console.log(cssThree);

globalThis.jsOne = 'window.onload=loadButtons; function loadButtons() {document.getElementById("output").innerHTML=`<button onclick="play()" class="'+button+'">'+buttonText+'</button>`} function play(){document.getElementById("output").innerHTML = `<div class="main-picture"><iframe src="https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&loop=1&modestbranding=1&controls=0&rel=0"title="muahahahahaha" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`}';

globalThis.jsTwo = 'window.onload=loadButtons; function loadButtons(){document.getElementById("output").innerHTML=`<button onclick="play()"class="'+button+'">'+buttonText+'</button>`;} function play(){window.location.href="https://www.youtube.com/watch?v=xvFZjo5PgG0";}';
if (buttonResult == "redirect") {
globalThis.jsThree = jsTwo;
} else if (buttonResult == "embed") {
globalThis.jsThree = jsOne;
}
console.log(jsThree);

if (header.includes("http")) {
globalThis.htmlHeader = "<img src=\""+header+"\" width=\"700px\"/>"
} else {
globalThis.htmlHeader = '<p style="font-size: 31pt;">'+header+'</p>';
}

globalThis.htmlOne = "<!DOCTYPE html><html><head><title>"+title+"</title><link rel=\"shortcut icon\" type=\"image/"+faviconType+"\" href=\""+favicon+"\"><style>";
console.log(htmlOne);
globalThis.htmlTwo = htmlOne+cssThree+"</style><script>"+jsThree+"</script></head><body>"+htmlHeader+'<p>'+description+'</p>'+'<p id="output"></p><div class="main-footer"><p>Made with <a href="https://kpoovakan.github.io/spoofmaker">Spoof Maker</a>.</p></div></body></html>';
console.log(htmlTwo);

//download html file
const blob = new Blob([(htmlTwo)], {type:"text/html"});
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = "index.html";
link.click();
//clear memory
URL.revokeObjectURL(url);

}

function checkHTML() {
if (document.getElementById("fontName").value == "") {
alert("please select font");
} else if (document.getElementById("pageFavicon").value == "") {
alert("please enter favicon URL");
} else if (document.getElementById("faviconType").value == "") {
alert("please select favicon image extension");
} else if (document.getElementById("pageTitle").value == "") {
alert("please enter page title");
} else if (document.getElementById("pageHeader").value == "") {
alert("please enter header URL or text");
} else if (document.getElementById("buttonOne").textContent == "press to select" && document.getElementById("buttonTwo").textContent == "press to select") {
alert("please select button style");
} else if (document.getElementById("buttonText").value == "") {
alert("please enter button text");
} else if (document.getElementById("videoStyle").value == "") {
alert("please select button result");
} else {
createHTML();
}}

function setColors() {
const root = document.documentElement;
globalThis.background = document.getElementById("background").value;
globalThis.foreground = document.getElementById("foreground").value;
root.style.setProperty("--background", background);
root.style.setProperty("--foreground", foreground);
}
function setFonts() {
const root = document.documentElement;
globalThis.fontName = document.getElementById("fontName").value;
root.style.setProperty("--font", fontName);
}
function setCustomization() {
globalThis.favicon = document.getElementById("pageFavicon").value;
globalThis.title = document.getElementById("pageTitle").value;
globalThis.header = document.getElementById("pageHeader").value;
globalThis.description = document.getElementById("pageDescription").value;
globalThis.faviconType = document.getElementById("faviconType").value;
}
function buttonOne() {
globalThis.button = "main-buttonOne";
document.getElementById("buttonOne").textContent = `selected!`;
document.getElementById("buttonTwo").textContent = `press to select`;
}
function buttonTwo() {
globalThis.button = "main-buttonTwo";
document.getElementById("buttonOne").textContent = `press to select`;
document.getElementById("buttonTwo").textContent = `selected!`;
}
function setButtons() {
globalThis.buttonText = document.getElementById("buttonText").value;
globalThis.buttonResult = document.getElementById("videoStyle").value;
}
