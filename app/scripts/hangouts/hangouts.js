'use strict';

var port = chrome.runtime.connect({name: 'hangouts'});
port.postMessage({text: 'Hello, Background'});
port.onMessage.addListener(hangoutsPortListener);

function hangoutsPortListener(msg) {
  console.log(port.name, msg);
}

ready('span[dir="ltr"]', function(element){
    console.log($(element).text());
});
