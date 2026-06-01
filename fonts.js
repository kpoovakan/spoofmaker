"use strict";

function system() {
  document.getElementById("fontSelector").innerHTML = `
  </br><label for="fontType">font type: </label><select id="fontType" class="input" onchange="fontSelection()">
  <option value="" disabled selected hidden>select font type</option><option value="serif">serif</option><option value="sans">sans-serif</option><option value="monospace">monospace</option><option value="decorative">decorative</option></select>
  <label for="fontName">font: </label><select id="fontName" class="input" onchange="setFonts()"><option value="" disabled selected hidden>select a font type first!</option></select>
  </br><div class="preview" id="fontSystemPreview">font preview will appear here...</div>
  `;
}

function googly() {
  document.getElementById("fontSelector").innerHTML = `
  </br><input id="fontGoogly" class="input" placeholder="enter Google font name" onchange="fontGooglyCheck()"></input>
  <p class="input">remember that Google fonts are case sensitive: "Oregano" will work, but "oregano" will not work.</p>
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
}
