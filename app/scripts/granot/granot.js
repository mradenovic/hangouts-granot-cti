'use strict';

var port = chrome.runtime.connect({name: 'granot'});
port.postMessage({granotIsReady: true});
port.onMessage.addListener(granotOnMessage);

function granotOnMessage(msg) {
  if (msg.callerId) {
    $('input[type=text]', window.parent.frames[1].document).val(msg.callerId);
    $('form', window.parent.frames[1].document).submit();
  }
}
