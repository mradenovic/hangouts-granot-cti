'use strict';

var port = chrome.runtime.connect({name: 'granot'});
port.postMessage({granotIsReady: true});
port.onMessage.addListener(granotOnMessage);

function granotOnMessage(msg) {
  console.log(port.name, msg);
}
