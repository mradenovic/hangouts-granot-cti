'use strict';

var port;
var url = document.URL;

if (url.match(/StartPage#epreld/)) {
  console.log(url);
  port = chrome.runtime.connect({name: 'hangouts'});

  port.postMessage({text: 'Hello, Background'});
  port.onMessage.addListener(hangoutsPortListener);

  ready('span[dir="ltr"]', function(element){
      console.log($(element).text());
  });
}

function hangoutsPortListener(msg) {
  console.log(port.name, msg);
}
