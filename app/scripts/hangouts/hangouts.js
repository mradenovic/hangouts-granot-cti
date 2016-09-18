'use strict';

var port;
var url = document.URL;

if (url.match(/StartPage#epreld/) || url.match(/gmail#epreld/)) {
  port = chrome.runtime.connect({name: 'hangouts'});

  port.postMessage({hangoutsIsReady: true});
  port.onMessage.addListener(hangoutsOnMessage);

  ready('span[dir="ltr"]', hangoutsOnInboundCall);
}

function hangoutsOnMessage(msg) {
  console.log(port.name, msg);
}

function hangoutsOnInboundCall(element) {
  var callerId = $(element).text();
  var incoming = $('div:contains("Incoming call")');
  incoming.off('click.hangouts').on('click.hangouts', function () {
    port.postMessage({callerId: callerId});

    // Prevent fireing the event more than once
    incoming.off('click.hangouts');
  });
}
