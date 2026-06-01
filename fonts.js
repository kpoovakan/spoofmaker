"use strict";

function system() {
  document.getElementById("fontSelector").innerHTML = `
  </br><label for="fontCollection">connect fonts from </label><select id="fontCollection" class="input" onchange="fontCollection()">
  <option value="fontGoogly">Google Fonts</option><option value="fontSystem" selected>System Fonts</option></select>
  <p class="input">Google Fonts is recommended because it offers a wide variety of fonts. however, Google Fonts might not work offline. System Fonts are reliable for offline use, but are much more limited.</p>
  </br><label for="fontType">font type: </label><select id="fontType" class="input" onchange="fontSelection()">
  <option value="" disabled selected hidden>select font type</option><option value="serif">serif</option><option value="sans">sans-serif</option><option value="monospace">monospace</option><option value="decorative">decorative</option></select>
  <label for="fontName">font: </label><select id="fontName" class="input" onchange="setFonts()"><option value="" disabled selected hidden>select a font type first!</option></select>
  </br><div class="preview" id="fontSystemPreview">font preview will appear here...</div>
  `;
}

function googly() {
  document.getElementById("fontSelector").innerHTML = `
  </br><label for="fontCollection">connect fonts from </label><select id="fontCollection" class="input" onchange="fontCollection()">
  <option value="fontGoogly" selected>Google Fonts</option><option value="fontSystem">System Fonts</option></select>
  <p class="input" style="text-align: justify;">Google Fonts is recommended because it offers a wide variety of fonts. however, Google Fonts might not work offline. System Fonts are reliable for offline use, but are much more limited.</p>
  </br><p class="input">name of Google Font: <input id="fontGoogly" class="input" placeholder="LXGW WenKai Mono TC" onchange="fontGooglyCheck()"></input></p>
  <p class="input">remember that Google Fonts is case sensitive: "Oregano" will work, but "oregano" will not work.</p>
  </br><div class="preview" id="fontGooglyPreview">font preview will appear here...</div>
  `;
}

function fontGooglyCheck() {
  var fontGooglyName = document.getElementById("fontGoogly").value;
  var fontGooglyNamePlus = fontGooglyName.replaceAll(" ", "+");
  var fontGooglyLink = "https://fonts.googleapis.com/css?family="+fontGooglyNamePlus;
  console.log(fontGooglyLink);
  var fontGooglyElement = '<link href="'+fontGooglyLink+'"rel="stylesheet">';
  console.log(fontGooglyElement);
  document.head.innerHTML+= fontGooglyElement;
  var fontGooglyPreview = '<p style="font-family:'+fontGooglyName+';">Everyday, I see the quick brown fox jump over the lazy dog.</p>';
  document.getElementById("fontGooglyPreview").innerHTML= fontGooglyPreview;
  setFontsGoogle();
}

function fontCollection() {
  var selected = document.getElementById("fontCollection").value;
  if (selected == "fontGoogly") {
    googly();
  } else if (selected == "fontSystem") {
    system();
  } else {
    console.log('error in selecting the font "Collection"');
}}
