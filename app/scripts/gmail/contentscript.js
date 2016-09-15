'use strict';

var port = chrome.runtime.connect({name: "gmail"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(gmailPortListener);

function gmailPortListener(msg) {
  console.log(port.name, msg);
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
}
