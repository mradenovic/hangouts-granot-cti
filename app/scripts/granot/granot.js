'use strict';

var port = chrome.runtime.connect({name: 'granot'});
port.postMessage({text: 'Hello, Background'});
port.onMessage.addListener(granotPortListener);

function granotPortListener(msg) {
  console.log(port.name, msg);
}
