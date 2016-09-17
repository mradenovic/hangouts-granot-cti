'use strict';

var port;
var url = document.URL;

if (url.match(/StartPage#epreld/) || url.match(/gmail#epreld/)) {
  port = chrome.runtime.connect({name: 'hangouts'});

  port.postMessage({hangoutsIsReady: true});
  port.onMessage.addListener(hangoutsOnMessage);

  ready('span[dir="ltr"]', function(element){
      var callerId = $(element).text();
      console.log(callerId);
      port.postMessage({callerId: callerId});
  });
}

function hangoutsOnMessage(msg) {
  console.log(port.name, msg);
}
