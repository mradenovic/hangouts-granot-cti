'use strict';

var granotPort;
var hangoutsPort;

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onConnect.addListener(function(port) {
  if (port.name == 'granot') {
    granotPort = port;
    port.onMessage.addListener(granotOnMessage);
  } else if (port.name == 'hangouts') {
    hangoutsPort = port;
    port.onMessage.addListener(hangoutsOnMessage);
  }
});

function granotOnMessage(msg) {
  console.log(msg);
  granotPort.postMessage({text: 'Hello Granot'});
}

function hangoutsOnMessage(msg) {
  console.log(msg);
  hangoutsPort.postMessage({text: 'Hello Hangouts'});
}
