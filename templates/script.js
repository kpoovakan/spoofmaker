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
  document.getElementById("viewer").innerHTML = `<p>select one of the options below to view the templates for finished Spoofs.</p>`;
}

function v1js() {
  document.getElementById("viewer").innerHTML = `<iframe id="embed" src="v1.js" width="100%" height="500px"></iframe>`;
  softWrap();
}

function v1css() {
  document.getElementById("viewer").innerHTML = `<iframe id="embed" src="v1.css" width="100%" height="500px"></iframe>`;
  softWrap();
}

function v2txt() {
  document.getElementById("viewer").innerHTML = `<iframe id="embed" src="v2.txt" width="100%" height="500px"></iframe>`;
  softWrap();
}
