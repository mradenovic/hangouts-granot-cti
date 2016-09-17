'use strict';

var gmailPort;
var granotPort;
var hangoutsPort;

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "gmail");
  console.log(port);
  if (port.name == 'gmail') {
    gmailPort = port;
    port.onMessage.addListener(gmailOnMessage);
  } else if (port.name == 'granot') {
    granotPort = port;
    port.onMessage.addListener(granotOnMessage);
  } else if (port.name == 'hangouts') {
    hangoutsPort = port;
    port.onMessage.addListener(hangoutsOnMessage);
  }
});

function gmailOnMessage(msg) {
  console.log(msg);
  if (msg.joke == "Knock knock")
    gmailPort.postMessage({question: "Who's there?"});
  else if (msg.answer == "Madame")
    gmailPort.postMessage({question: "Madame who?"});
  else if (msg.answer == "Madame... Bovary")
    gmailPort.postMessage({question: "I don't get it."});
}

function granotOnMessage(msg) {
  console.log(msg);
  granotPort.postMessage({text: 'Hello Granot'});
}

function hangoutsOnMessage(msg) {
  console.log(msg);
  hangoutsPort.postMessage({text: 'Hello Hangouts'});
}
