"use strict";
window.onload = googly

function system() {
  document.getElementById("id").innerHTML = `
  </br><label for="fontType">font type: </label><select id="fontType" class="input" onchange="fontSelection()">
  <option value="" disabled selected hidden>select font type</option><option value="serif">serif</option><option value="sans">sans-serif</option><option value="monospace">monospace</option><option value="decorative">decorative</option></select>
  <label for="fontName">font: </label><select id="fontName" class="input" onchange="setFonts()"><option value="" disabled selected hidden>select a font type first!</option></select>
  `;
}

function googly() {
}
