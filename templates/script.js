"use strict";
window.onload = info

function softWrap() {
  const iframe = document.getElementById("embed");
  iframe.onload = function() {
    const style = document.createElement("style");
    style.innerHTML = "body {overflow-wrap: break-word; white-space: normal;}";
    iframe.contentWindow.document.head.appendChild(style);
  };
}

function info() {
  document.getElementById("preview") = `<p>select one of the options above to view the templates for finished Spoofs.</p>`;
}

function v1js() {
  document.getElementById("preview") = `<iframe id="embed" src="v1.js"></iframe>`;
  softWrap();
}

function v1css() {
  document.getElementById("preview") = `<iframe id="embed" src="v1.css"></iframe>`;
  softWrap();
}

function v2txt() {
  document.getElementById("preview") = `<iframe id="embed" src="v2.txt"></iframe>`;
  softWrap();
}
