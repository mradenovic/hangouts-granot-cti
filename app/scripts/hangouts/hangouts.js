'use strict';

var port;
var url = document.URL;

if (url.match(/StartPage#epreld/)) {
  port = chrome.runtime.connect({name: 'hangouts'});

  port.onMessage.addListener(hangoutsPortListener);

  ready('span[dir="ltr"]', function(element){
      var callerId = $(element).text();
      console.log(callerId);
      port.postMessage({callerId: callerId});
  });
}

function hangoutsPortListener(msg) {
  console.log(port.name, msg);
}
